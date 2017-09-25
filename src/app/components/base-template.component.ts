import { TrackType } from '@defs/track-type';
import { LogService } from '@services/log.service';
import { Component, Input } from '@angular/core';
import {PermissionType} from '@defs/permission-type';
import { Type } from 'class-transformer';

@Component({
  selector: 'app-query-widget',
  template: `
  `,
  styles: []
})
export class BaseTemplateComponent {

  @TrackType(String)
  @Input()componentID: string;

  constructor(protected logService: LogService) {
  }
}
