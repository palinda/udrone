import { Component, OnInit, Input, Inject } from '@angular/core';
import { TrackType } from '@defs/track-type';
import { FormDef } from '@app/defs/form-def';
import { ActionCB } from '@app/components/unit/u-form/u-form.component';
import { IServiceQuery } from '@services/service-query.interface';
import { SERVICE_QUERY } from '@services/service-query.provider';
import { Query } from '@app/defs/query';
import { UMsg } from '@app/defs/umsg';
import notify from 'devextreme/ui/notify';
import { WidgetTemplateComponent } from '@app/components/widget-template.component';
import { LogService } from '@app/services/log.service';
import { ResizeService } from '@app/services/resize.service';

@Component({
  selector: 'app-form-window',
  template: `
    <div>
    <app-u-text i18n [text]="heading" [styles]="headingStyles"></app-u-text>
    <app-u-form [config]="config" [data]="data" (onAction)="onAction($event)"></app-u-form>
    </div>
  `,
  styles: []
})
export class FormWindowComponent extends WidgetTemplateComponent implements OnInit {

  static key = 'FormWindowComponent';

    /**
   * @description {String} Widget heading
   */
  @TrackType(String)
  @Input() heading = '';

  @TrackType(String)
  @Input() path;

  @TrackType(Object)
  @Input() config: Object;

  @TrackType(UMsg)
  @Input() data: UMsg;

  /**
   * Heading styles
   */
  headingStyles = {
    'font-size.px': '20',
    'color' : 'gray'
  };

  constructor(logService: LogService, resizeService: ResizeService, @Inject(SERVICE_QUERY) private serviceQuery: IServiceQuery) {
    super(logService, resizeService);
  }

  ngOnInit() {
  }

  onAction(action: ActionCB) {
    this.serviceQuery.query<Object>(new Query(this.path, action.item)).subscribe((resp) => {
      notify('Successfuly saved:' + resp);
    });
  }

}
