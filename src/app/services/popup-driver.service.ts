import { Action } from '@defs/action';
import { ComponentDef } from '@defs/component-def';
import { Injectable, EventEmitter } from '@angular/core';
import { PopupOptions } from '@components/unit/u-popup/u-popup.component';

export class PopupProperties {
  constructor(private _options: PopupOptions, private _content: ComponentDef, private _actions: Array<Action>) {
  }

  public get options() {
    return this._options;
  }

  public get content() {
    return this._content;
  }

  public get actions() {
    return this._actions;
  }
}

@Injectable()
export class PopupDriverService {

  public openPopup$: EventEmitter<PopupProperties>;

  constructor() {
    this.openPopup$ = new EventEmitter<PopupProperties>();
  }

  public openPopup(options: PopupOptions, content: ComponentDef, actions: Array<Action>) {
    this.openPopup$.emit(new PopupProperties(options, content, actions));
  }

}
