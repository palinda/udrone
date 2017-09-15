import { Size } from '@defs/size';
import { Component, OnInit, Input } from '@angular/core';

export class SparkLinkOptions {

  keyField: string;
  valueField: string;
  lineType: string;
  lineColor: string;
  firstLastColor: string;
  pointSize: string;
  pointSymbol: string;
  pointColor: string;
  tooltipFormat: string;
  size: Size;

  constructor(keyField: string, valueField: string, lineType: string, lineColor: string, firstLastColor: string,
    pointSize: string, pointSymbol: string, pointColor: string, tooltipFormat: string, size: Size) {
      this.keyField = keyField;
      this.valueField = valueField;
      this.lineType = lineType;
      this.lineColor = lineColor;
      this.firstLastColor = firstLastColor;
      this.pointSize = pointSize;
      this.pointSymbol = pointSymbol;
      this.pointColor = pointColor;
      this.tooltipFormat = tooltipFormat;
      this.size = size;
  }
}


@Component({
  selector: 'app-u-sparkline',
  templateUrl: './u-sparkline.component.html',
  styleUrls: ['./u-sparkline.component.scss']
})
export class USparklineComponent implements OnInit {

  /**
   * Sparkline options
   */
  @Input() options = new SparkLinkOptions('key', 'value', 'spline', '#9ab57e', '#e55253', '6', undefined, '#ebdd8f',
            'currency', new Size('200', '30'));

  /**
   * Sparkline data
   */
  @Input() data = [];

  constructor() { }

  ngOnInit() {
  }

}
