import { LogService } from '@services/log.service';
import { Component, Input } from '@angular/core';
import {PermissionType} from '@defs/permission-type';

@Component({
  selector: 'app-query-widget',
  template: `
  `,
  styles: []
})
export class BaseTemplateComponent {

  @Input()id: string;

  @Input()permissions: PermissionType = new PermissionType([], false);

  constructor(protected logService: LogService) {
  }
}
