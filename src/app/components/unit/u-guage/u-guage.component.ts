import * as Utils from '@utilities/utils';
import { Component, OnInit, Input } from '@angular/core';

/**
 * Guage Component Input Data Type
 */
export class GaugeData {

  /**
   * Value
   */
  mean: number;

  /**
   * Maximum Value for that period
   */
  max: number;

  /**
   * Minium Value for that period
   */
  min: number;
  constructor(_mean: number, _max: number, _min: number) {
    this.mean = _mean;
    this.max = _max;
    this.min = _min;
  }
}

/**
 * Gauge Options
 */
export class GaugeOptions {

  /**
   * Component title
   */
  title: String;

  /**
   * Title font size
   */
  titleSize = 24;
  /**
   * Prefix for label
   */
  labelPrefix: String = '';

  /**
   * Sufix for label
   */
  labelSuffix: String = '';

  /**
   * Lower value
   */
  start = 0;

  /**
   * Upper value
   */
  end = 100;

  /**
   * Gauge step size
   */
  stepSize = 10;

  constructor(_title: String, _titleSize: number, _labelPrefix: String, _labelSuffix: String, 
    _start: number, _end: number, _stepSize: number) {
    this.title  = _title;
    this.titleSize = _titleSize;
    this.labelPrefix = Utils.getIfDefined(this.labelPrefix, _labelPrefix);
    this.labelSuffix = Utils.getIfDefined(this.labelSuffix, _labelSuffix);
    this.start = Utils.getIfDefined(this.start, _start);
    this.end = Utils.getIfDefined(this.end, _end);
    this.stepSize = Utils.getIfDefined(this.stepSize, _stepSize);
  }


}

/**
 * Temparory variable to store component scope
 */
let cmpScope;

/**
 * Customized guage component
 */
@Component({
  selector: 'app-u-guage',
  templateUrl: './u-guage.component.html',
  styleUrls: ['./u-guage.component.scss']
})
export class UGuageComponent implements OnInit {

   /**
   * Guage Input value
   */
  @Input() value = new GaugeData(0, 0, 0);

  /**
   * Guage options
   */
  @Input() options: GaugeOptions;

  /**
   * Only for Display bind. Color change step size
   */
  colorStep: number;

  constructor() {
  }

  ngOnInit() {
    cmpScope = this;
    this.colorStep = Math.floor(((this.options.end - this.options.start) / 4));
  }

  /**
 * @param {string} message  Private function to call for lable custermize
 */
  public customizeText(arg) {
    if (cmpScope.options === undefined) {
      return '';
    }

    return cmpScope.options.labelPrefix + ' ' + arg.valueText + ' ' + cmpScope.options.labelSuffix;
  }
}
