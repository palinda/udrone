import { LogService } from '@services/log.service';
import { Component } from '@angular/core';
import { PermissionType } from '@defs/permission-type';
import { BaseTemplateComponent } from './base-template.component';

@Component({
  selector: 'app-query-widget',
  template: `
  `,
  styles: []
})
export class QueryTemplateComponent extends BaseTemplateComponent {

  static type = 'QueryTemplateComponent';

  constructor(logService: LogService) {
    super(logService);
  }
}
