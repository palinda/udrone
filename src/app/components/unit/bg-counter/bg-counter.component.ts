import {TrackType} from '@defs/track-type';
import { IntervalService } from '@services/interval.service';
import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';
import { UnitTemplateComponent } from '@components/unit-template/unit-template.component';

/**
 * Animated counter element
 * Size, animating speed and color comfigurable
 */
@Component({
  selector: 'app-bg-counter',
  template: `
    <div class="bg-counter text-info-h1" [ngStyle]="styles">
      {{displayValue}}
    </div>
  `,
  styles: [
      `
        .bg-counter {
          padding : 5px 10px;
        }

      `
  ],
  providers: [ IntervalService ]
})
export class BgCounterComponent extends UnitTemplateComponent implements OnInit, OnChanges {

  static key = 'BgCounterComponent';
  /**
   * Counter value
   */
  @TrackType(Number)
  @Input() value: number;

  /**
   * Counter value
   */
  @TrackType(Number)
  @Input() size: number;


  /**
   * Animating speed can configure
   */
  @TrackType(Number)
  @Input() interval = 10;

  /**
   * Custom Style class
   */
  @TrackType(Object)
  @Input() styles = {};

  /**
   * This is the template display value
   */
  displayValue = 0;

  /**
   * Display count update interval
   */
  private timer;

  constructor(private intervalService: IntervalService) {
    super();
  }

  ngOnInit() {
  }

  onValueChange(value: string) {
      const target: number = parseInt(value, 10) || 0;
      const step = target < this.displayValue ? -1 : 1;
      this.timer = this.intervalService.setInterval(() => {
        if (this.displayValue !== target) {
          this.displayValue += step;
        } else {
          this.intervalService.clearInterval(this.timer);
        }
      }, this.interval);
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}) {

    if (changes['value'] !== undefined) {
      this.intervalService.clearInterval(this.timer);
      this.onValueChange(changes['value'].currentValue);
    }
  }

}
