import { Component, OnInit, Input } from '@angular/core';
import DxThemes from 'devextreme/ui/themes';

export class Series {

  constructor(private _name: string, private _valueField: string) {
  }


  get name(): string {
    return this._name;
  }

  get valueField(): string {
    return this._valueField;
  }
}

export class SplineOptions {

  private _title: string;
  private _palette = 'violet';
  private _argumentField = 'key';
  private _type = 'value';
  private _showDataGrid = true;
  private _showTooltip = true;
  private _series: Array<Series> = [];

  constructor(title: string) {
    this._title = title;
  }


  get title(): string {
    return this._title;
  }

  get palette(): string {
    return this._palette;
  }

  get argumentField(): string {
    return this._argumentField;
  }

  get type(): string {
    return this._type;
  }

  get showDataGrid(): boolean {
    return this._showDataGrid;
  }

  get showTooltip(): boolean {
    return this._showTooltip;
  }

  get series(): Array<Series> {
    return this._series;
  }


  set palette(value: string) {
    this._palette = value;
  }

  set argumentField(value: string) {
    this._argumentField = value;
  }

  set type(value: string) {
    this._type = value;
  }

  set showDataGrid(value: boolean) {
    this._showDataGrid = value;
  }

  set showTooltip(value: boolean) {
    this._showTooltip = value;
  }

  set series(value: Array<Series>) {
    this._series = value;
  }
}

@Component({
  selector: 'app-u-spline',
  templateUrl: './u-spline.component.html',
  styleUrls: ['./u-spline.component.scss']
})
export class USplineComponent implements OnInit {

  @Input() data = [];

  @Input() options = new SplineOptions('');

  constructor() { }

  ngOnInit() {
  }

}
