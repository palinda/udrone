import { IntervalService } from '@services/interval.service';
import { Component, OnInit, Input, OnChanges, SimpleChange } from '@angular/core';

/**
 * Animated counter element
 * Size, animating speed and color comfigurable
 */
@Component({
  selector: 'app-bg-counter',
  template: `
    <span class="bg-counter text-info-h1" [ngStyle]="styles">
      {{displayValue}}
    </span>
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
export class BgCounterComponent implements OnInit, OnChanges {

  /**
   * Counter value
   */
  @Input() value: number;

  /**
   * Animating speed can configure
   */
  @Input() interval = 10;

  /**
   * Counter Size
   */
  @Input() size = 30;


    /**
   * Custom Style class
   */
  @Input() styles = {};

  /**
   * This is the template display value
   */
  displayValue = 0;

  /**
   * Display count update interval
   */
  private timer;

  constructor(private intervalService: IntervalService) { }

  ngOnInit() {
    this.onSizeChange(this.size);
  }

  onSizeChange(size: number) {
    if (this.size !== undefined) {
      this.styles['font-size.px'] = this.size;
    }
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

    if (changes['size'] !== undefined) {
      this.onSizeChange(changes['size'].currentValue);
    }
  }

}
