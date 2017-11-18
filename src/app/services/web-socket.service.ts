import {DynamicMsg} from '@defs/dynamic-msg';
import { UMap } from '@utilities/umap';
import { $WebSocket, WebSocketSendMode, WebSocketConfig } from 'angular2-websocket/angular2-websocket';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import * as Utils from '@utilities/utils';

@Injectable()
export class WebSocketService {

  private _subscribeField: string;
  private _ws: $WebSocket;
  private _endpoint: string;
  private _isSecured: boolean;

  private _cbMap = new UMap<string, Array<(msg) => void>>();
  private _observers = new UMap<string, any>();
  private _recussionCount = 0;

  constructor() {
  }

  public init(_endpoint: string, _isSecured: boolean, _subscribeField: string) {
    if (_isSecured) {
      this._endpoint = 'wss://' + _endpoint;
    } else {
      this._endpoint = 'ws://' + _endpoint;
    }
    this._ws = new $WebSocket(this._endpoint);
    this._subscribeField = _subscribeField;
    this._ws.onMessage(
      (msg: MessageEvent) => {
          const reply = JSON.parse(msg.data);
          console.log('Receive Msg', reply);
          if (reply['__reqID']) {
            if (this._observers.contains(reply['__reqID'])) {
              const reqID = reply['__reqID'];
              delete reply['__reqID'];
              this._observers.get(reqID).next(reply);
              this._observers.get(reqID).complete();
            }
          } else if (reply[this._subscribeField]) {
            this._cbMap.get(reply[this._subscribeField]).forEach(cb => {
              cb(reply);
            });
          } else if (this._cbMap.contains('__ALL')) {
            this._cbMap.get('__ALL').forEach( cb => {
              cb(reply);
            });
          }
        },
        {autoApply: false}
    );
  }

  public subscribeChannel(subscribeValue: string, cb: (msg) => void) {
    if (this._cbMap.contains(subscribeValue)) {
      this._cbMap.get(subscribeValue).push(cb);
    } else {
      const array  = new Array();
      array.push(array);
      this._cbMap.put(subscribeValue, array);
    }
  }

  public send(msg: any): Observable<any> {

    return Observable.create(observer => {
      const reqID = this.getReqID();
      msg['__reqID'] = reqID;
      this._observers.put(reqID, observer);
      console.log('Send Msg', msg);
      this._ws.send4Direct(JSON.stringify(msg));
   });

  }

  private getReqID(): string {
    this._recussionCount++;
    let reqID = Utils.getRandomInt(0, 1000000) + '';
    while (this._observers.contains(reqID)) {
      if (this._recussionCount > 20) {
        console.log('Web Socker Request ID get going too many loops');
      }
      reqID = Utils.getRandomInt(0, 1000000) + '';
    }

    this._recussionCount = 0;
    return reqID;
  }

  public close(immediate: boolean) {
    this._ws.close(immediate);
  }

}
