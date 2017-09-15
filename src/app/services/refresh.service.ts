import { LogService } from './log.service';
import { SERVICE_QUERY } from './service-query.provider';
import { IServiceQuery } from '@services/service-query.interface';
import { UMap } from './../utilities/umap';
import { RefreshRequest } from '@defs/refresh-request';
import { IntervalService } from '@services/interval.service';
import { Injectable, Inject } from '@angular/core';
import * as Utils from '@utilities/utils';

export class ReqEntry {

  constructor(private _id: string, private _req: RefreshRequest<any>) {
  }

  get id(): string {
    return this._id;
  }

  get req(): RefreshRequest<any> {
    return this._req;
  }
}

@Injectable()
export class RefreshService {

  private _interval = undefined;
  private _unitInterval = 1;
  private _unitCount = 0;
  private _subscribers: UMap<string, string>;
  private _requestsOnInterval: UMap<number, Array<ReqEntry>>;

  constructor(private _intervalService: IntervalService, @Inject(SERVICE_QUERY) private _serviceQuery: IServiceQuery,
  private _logService: LogService) {
    this._subscribers = new UMap<string, string>();
    this._requestsOnInterval = new UMap<number, Array<ReqEntry>>();
  }

  private startTimer(): void {
    if (!Utils.isUndefined(this._interval)) {
      return;
    }

    this._logService.printTrace('Timer started');
    this._interval = this._intervalService.setInterval(() => this.onTimer(), this._unitInterval * 1000);
  }

  private stopTimer(): void {
    this._intervalService.clearInterval(this._interval);
    this._unitCount = 0;
    this._logService.printTrace('Timer stoped');
  }

  private onTimer() {

    this._requestsOnInterval.forEach((key, value) => {

      if (this._unitCount % key === 0) {
          for (let i = value.length - 1; i >= 0; i -= 1) {

            const entry = value[i];
            if (!this._subscribers.contains(entry.id)) {
              this._logService.printTrace('Subscription removed:', entry.id);
              value.splice(i, 1);
              continue;
            }

            this._serviceQuery.query(entry.req.query).subscribe((resp) => {
              entry.req.callback(resp, undefined);
            },
            (err) => {
                this._logService.printError('Refresh query failed. Error:', err);
                entry.req.callback(undefined, err);
            });
          }
      }
    });

    this._unitCount++;
  }

  public subscribeForRefresh(id: string, requests: Array<RefreshRequest<any>>) {

    if (Utils.isUndefined(id)) {
      throw new Error('Subcription received from undefined id');
    }
    this._logService.printTrace('Subscribe for refresh:', id);
    this._subscribers.put(id, '');
    requests.forEach((item) => {
      const array = this._requestsOnInterval.getOrDefault(item.interval, new Array<ReqEntry>());
      array.push(new ReqEntry(id, item));
      this._requestsOnInterval.put(item.interval, array);
    });

    this.startTimer();
  }

  public unSubscribeForRefresh(id: string) {
    this._logService.printTrace('Pending Unsubscribe for refresh:', id);
    this._subscribers.remove(id);
  }
}
