import { PopupDriverService, PopupProperties } from './../../../services/popup-driver.service';
import {Component, Input, OnInit} from '@angular/core';
import {Size} from '@app/defs/size';
import {ComponentDef} from '@defs/component-def';
import { Action } from '@defs/action';

export class PopupOptions {
  private _size: Size = new Size('300', '250');
  private _title: string;
  private _draggable = true;
  private _closeOnOutFocus = true;

  constructor(_title: string) {
    this._title = _title;
  }

  get size(): Size {
    return this._size;
  }

  set size(value: Size) {
    this._size = value;
  }

  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }

  get draggable(): boolean {
    return this._draggable;
  }

  set draggable(value: boolean) {
    this._draggable = value;
  }

  get closeOnOutFocus(): boolean {
    return this._closeOnOutFocus;
  }

  set closeOnOutFocus(value: boolean) {
    this._closeOnOutFocus = value;
  }
}

@Component({
  selector: 'app-u-popup',
  templateUrl: './u-popup.component.html',
  styleUrls: ['./u-popup.component.scss']
})
export class UPopupComponent implements OnInit {

  /**
   * Popup options to configure
   */
  @Input() options: PopupOptions = new PopupOptions(undefined);

  /**
   * Popup content definition
   */
  @Input() content: ComponentDef;

  /**
   * Action callbacks with action name
   */
  @Input() actions: Array<Action>;

  /**
   * Show popup
   */
  popupVisible = false;

  constructor(private popupDriver: PopupDriverService) {
    this.popupDriver.openPopup$.subscribe( popup => {
      this.popupVisible = true;
      this.options = popup.options;
      this.actions = popup.actions;
      this.content = popup.content;
    });
  }

  ngOnInit() {
  }

  onAction(action: Action) {
    if (action.closeOnSelect) {
      this.popupVisible = false;
    }

    action.cb(action);
  }

}
