import { RefreshRequest } from '@defs/refresh-request';
import { RefreshService } from '@services/refresh.service';
import { LogService } from '@services/log.service';
import { WidgetTemplateComponent } from '@components/widget-template.component';
import { NameField } from '@defs/name-field';
import { Query } from '@defs/query';
import { DynamicMsg } from '@defs/dynamic-msg';
import { TrackType } from '@defs/track-type';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-multi-counters',
  template: `
    <div>
    <app-u-text [text]="heading" [styles]="headingStyles"></app-u-text>
    <div class="h-seperator"></div>
    <div fxLayout="row" >
      <div fxFlex *ngFor="let counter of counterFields">
        <app-bg-counter [value]="count[counter.key]"></app-bg-counter>
        <app-u-text [text]="counter.name" [styles]="{ 'padding': '1px 10px', 'margin-top': '-4px'}"></app-u-text>
      </div>
    </div>
  </div>
  `,
  styles: []
})
export class MultiCountersComponent extends WidgetTemplateComponent implements OnInit {

  static key = 'MultiCountersComponent';
  /**
   * @description {String} Widget heading
   */
  @TrackType(String)
  @Input() heading: string;

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

    /**
  * Count data query
  * Response should be in format { "count" : number }
  */
  @TrackType(Array)
  @Input() counterFields: Array<NameField>;

  count: Object = {};
    /**
   * Heading styles
   */
  headingStyles = {
    'font-size.px': '20',
    'color' : 'gray'
  };

  constructor(refreshService: RefreshService, logService: LogService) {
    super(refreshService, logService);
  }

  ngOnInit() {
    this.refreshService.subscribeForRefresh(this.componentID, [
      new RefreshRequest<DynamicMsg>(this.refreshInterval, this.countQuery, (data, err) => {
        if (err !== undefined) {
          this.onError(err, this.countQuery);
        } else {
          this.count = data;
        }
      })
  ]);
  }

}
