import { TrackType } from '@defs/track-type';
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

  @TrackType(String)
  @Input()componentID: string;

  @TrackType(String)
  @Input()permissions: PermissionType = new PermissionType([], false);

  constructor(protected logService: LogService) {
  }
}
