import { Size } from '@defs/size';
import { TrackType } from '@defs/track-type';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import DxThemes from 'devextreme/ui/themes';

export class Series {

  @TrackType(String)
  name: string;

  @TrackType(String)
  valueField: string;

  constructor(_name: string, _valueField: string) {
    this.name = _name;
    this.valueField = _valueField;
  }

}

export class SplineOptions {

  @TrackType(String)
  title: string;

  @TrackType(String)
  palette = 'violet';

  @TrackType(String)
  argumentField = 'key';

  @TrackType(Boolean)
  showDataGrid = true;

  @TrackType(Boolean)
  showTooltip = true;

  @TrackType(Boolean)
  dataExport = true;

  @TrackType(Array<Series>())
  series: Array<Series> = [];

  @TrackType(Size)
  size: Size;

  constructor(title: string) {
    this.title = title;
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
