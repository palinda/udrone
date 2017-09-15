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
   * Child component definition list
   */
@Input() componentDefList: Array<ComponentDef>;

/**
 * Heading after component open
 */
@Input() heading: string;

/**
 * Short name on tile
 */
@Input() shortname: string;

/**
 * Icon name
 */
@Input() icon: string;

  constructor(logService: LogService) {
    super(logService);
  }
}
