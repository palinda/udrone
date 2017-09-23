import { TrackType } from '@app/defs/track-type';
import { ComponentDef } from './../defs/component-def';
import { LogService } from '@services/log.service';
import { Component, Input } from '@angular/core';
import { PermissionType } from '@defs/permission-type';
import { BaseTemplateComponent } from './base-template.component';

@Component({
  selector: 'app-query-widget',
  template: `
  `,
  styles: []
})
export class ContainerTemplateComponent extends BaseTemplateComponent {


/**
 * Heading after component open
 */
@TrackType(String)
@Input() heading: string;

/**
 * Short name on tile
 */
@TrackType(String)
@Input() shortname: string;

/**
 * Icon name
 */
@TrackType(String)
@Input() icon: string;

  constructor(logService: LogService) {
    super(logService);
  }
}
