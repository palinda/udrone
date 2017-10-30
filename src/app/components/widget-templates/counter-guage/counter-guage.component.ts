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

@Component({
  selector: 'app-counter-guage',
  template: `
    <div class="container">
      <div class="guage">
        <app-u-guage [value]="count" [options]="guageOptions"></app-u-guage>
      </div>
      <app-bg-counter [value]="count.mean" class="counter" [size]="50"></app-bg-counter>
    </div>
  `,
  styles: [`

    .container {
      padding: 8px 15px;
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

  constructor(logService: LogService, refreshService: RefreshService) {
    super(logService, refreshService);
  }

  ngOnInit() {
    // this.guageOptions.size = this.componentDef.size.toPixel(100, 100);
    this.subscribeForRefresh([
        new RefreshRequest<CountResp>(this.refreshInterval, this.countQuery, (data, err) => {
          if (err !== undefined) {
            this.onError(err, this.countQuery);
          } else {
            this.count = new GaugeData(data.count, data.count, data.count);
          }
        })
    ]);
  }

}
