import { CountResp } from '@defs/count-resp';
import { RefreshRequest } from '@defs/refresh-request';
import { LogService } from '@services/log.service';
import { RefreshService } from '@services/refresh.service';
import { WidgetTemplateComponent } from '@components/widget-template.component';
import { Query } from '@defs/query';
import { DynamicMsg } from '@defs/dynamic-msg';
import { TrackType } from '@defs/track-type';
import { GaugeOptions, GaugeData } from '@components/unit/u-guage/u-guage.component';
import { Component, OnInit, Input } from '@angular/core';
import { ResizeService } from '@services/resize.service';
import { Size } from '@defs/size';

@Component({
  selector: 'app-counter-guage',
  template: `
    <div class="container">
      <div class="guage">
        <app-u-guage [value]="count" [options]="guageOptions"></app-u-guage>
      </div>
      <app-bg-counter [value]="count.mean" class="counter" [size]="countSize"></app-bg-counter>
    </div>
  `,
  styles: [`

    .container {
      padding: 8px 8px;
      text-align: center;
    }
    .counter {
      position: relative;
      top: -50px;
    }

  `]
})
export class CounterGuageComponent extends WidgetTemplateComponent implements OnInit {

  static key = 'CounterGuageComponent';
    /**
   * @description {String} Widget heading
   */
  @TrackType(GaugeOptions)
  @Input() guageOptions: GaugeOptions;

  /**
  * @description {Number} Data refresh interval
  */
  @TrackType(Number)
  @Input() refreshInterval = 10;

  /**
  * Count data query
  * Response should be in format { "count" : number }
  */
  @TrackType(Query)
  @Input() countQuery: Query<DynamicMsg>;

  count: GaugeData = new GaugeData(0, 0, 0);

  countSize = 50;

  constructor(logService: LogService, resizeService: ResizeService, refreshService: RefreshService) {
    super(logService, resizeService, refreshService);
  }

  ngOnInit() {
    this.countSize = this.calcFontSize(this.componentDef.size, 15);
    this.subscribeForRefresh([
        new RefreshRequest<CountResp>(this.refreshInterval, this.countQuery, (data, err) => {
          if (err !== undefined) {
            this.onError(err, this.countQuery);
          } else {
            this.count = new GaugeData(data.count, data.count, data.count);
          }
        })
    ]);

    this.subscribeForResize((size: Size) => {
      this.guageOptions.size = size.toPixel(98, 90);
      this.countSize = this.calcFontSize(size, 15);
    });
  }

}
