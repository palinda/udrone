import { Size } from '@defs/size';
import { SparkLinkOptions } from '@components/unit/u-sparkline/u-sparkline.component';
import { SparkResp } from '@defs/spark-resp';
import { LogService } from '@services/log.service';
import { RefreshRequest } from '@defs/refresh-request';
import { DynamicMsg } from '@defs/dynamic-msg';
import { Query } from '@defs/query';
import { RefreshService } from '@services/refresh.service';
import { PermissionType } from '@defs/permission-type';
import { WidgetTemplateComponent } from '@components/widget-template.component';
import { Component, OnInit, Input } from '@angular/core';
import { CountResp } from '@defs/count-resp';
import { TrackType } from '@app/defs/track-type';

@Component({
  selector: 'app-counter-sparkline',
  template: `
    <div>
      <app-u-text i18n [text]="heading" [styles]="headingStyles"></app-u-text>
      <div class="h-seperator"></div>
      <div fxLayout="row" >
        <div fxFlex="30" class="graph">
          <app-bg-counter [value]="count"></app-bg-counter>
        </div>
        <div fxFlex class="graph">
          <app-u-sparkline [data]="sparkData" [options]="sparkOptions"></app-u-sparkline>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .tile {
      width: 200px;
    }

    .graph {
      padding: 10px;
    }

  `]
})
export class CounterSparklineComponent extends WidgetTemplateComponent implements OnInit {

  /**
   * Widget heading
   */
  @TrackType(String)
  @Input() heading: string;

  @TrackType(Number)
  @Input() refreshInterval = 10;

  @TrackType(Query)
  @Input() countQuery: Query<DynamicMsg>;

  @TrackType(Query)
  @Input() sparkQuery: Query<DynamicMsg>;

  sparkOptions = new SparkLinkOptions('key', 'value', 'spline', '#9ab57e', '#e55253', '4', undefined, '#ebdd8f',
  'currency', new Size('120', '30'));
  count: number;
  sparkData = [];

  headingStyles = {
    'font-size.px': '20',
    'color' : 'gray'
  };

  constructor(refreshService: RefreshService, logService: LogService) {
    super(refreshService, logService);
  }

  ngOnInit() {
    this.refreshService.subscribeForRefresh(this.componentID, [
      new RefreshRequest<CountResp>(this.refreshInterval, this.countQuery, (data, err) => {
        if (err !== undefined) {
          this.onError(err, this.countQuery);
        } else {
          this.count = data.count;
        }
      }),
      new RefreshRequest<SparkResp>(this.refreshInterval, this.sparkQuery, (data, err) => {
        if (err !== undefined) {
          this.onError(err, this.sparkQuery);
        } else {
          this.sparkData = data.data;
        }
      })
  ]);
  }

}
