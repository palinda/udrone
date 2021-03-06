import { BASE_SIZE } from './../../../defs/constants';
import { Size } from '@defs/size';
import { TimeUtils } from '@utilities/time-utils';
import { RefreshRequest } from '@defs/refresh-request';
import { WidgetTemplateComponent } from '@components/widget-template.component';
import { LogService } from '@services/log.service';
import { RefreshService } from '@services/refresh.service';
import { UFixedQ } from '@utilities/ufixed-q';
import { Series } from '@components/unit/u-spline/u-spline.component';
import { SplineOptions } from '@components/unit/u-spline/u-spline.component';
import { DynamicMsg } from '@defs/dynamic-msg';
import { TrackType } from '@defs/track-type';
import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { Query } from '@defs/query';
import { ResizeService } from '@app/services/resize.service';

@Component({
  selector: 'app-realtime-spline',
  template: `
    <div class="container">
      <app-u-spline [data]="data.data" [options]="splineOptions"></app-u-spline>
    </div>
  `,
  styles: [`
    .container {
      padding: 10px 20px 50px 20px;
    }
  `]
})
export class RealtimeSplineComponent extends WidgetTemplateComponent implements OnInit {

  static key = 'RealtimeSplineComponent';
  /**
 * @description {String} Widget heading
 */
  @TrackType(String)
  @Input() heading: string;

  /**
  * @description {Number} Data refresh interval
  */
  @TrackType(Number)
  @Input() refreshInterval = 30;

  /**
  * Realtime current data query
  * Response should be in format { "count" : number }
  */
  @TrackType(Query)
  @Input() query: Query<DynamicMsg>;

  /**
   * Maximum number of data points
   */
  @TrackType(Number)
  @Input() dataPoints = 10;

  /**
   * For data line infomation
   */
  @TrackType(Array)
  @Input() series: Array<Series>;


  splineOptions: SplineOptions;

  data: UFixedQ<Object>;

  constructor(logService: LogService, resizeService: ResizeService, refreshService: RefreshService) {
    super(logService, resizeService, refreshService);
    this.data = new UFixedQ(this.dataPoints);
  }

  ngOnInit() {

    this.splineOptions = new SplineOptions(this.heading);
    this.splineOptions.argumentField = 'time';
    this.splineOptions.dataExport = false;
    this.splineOptions.showDataGrid = false;
    this.splineOptions.series = this.series;
    this.splineOptions.size = this.componentDef.size.toPixel(100, 100);

    this.subscribeForRefresh([
        new RefreshRequest<DynamicMsg>(this.refreshInterval, this.query, (data, err) => {
          if (err !== undefined) {
            this.onError(err, this.query);
          } else {
            data['time'] = TimeUtils.currentTime('mm:ss');
            this.data.add(data);
          }
        })
    ]);

    this.subscribeForResize((size: Size) => {
      this.splineOptions.size = size.toPixel(100, 100);
    });
  }

}
