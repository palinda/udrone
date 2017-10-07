import { TrackType } from '@app/defs/track-type';
import { ComponentDef } from '@defs/component-def';
import { LogService } from '@services/log.service';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PermissionType } from '@defs/permission-type';
import { BaseTemplateComponent } from './base-template.component';

@Component({
  selector: 'app-query-widget',
  template: `
  `,
  styles: []
})
export class ContainerTemplateComponent extends BaseTemplateComponent {

  static type = 'ContainerTemplateComponent';
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

    /**
   * Window close event emitter
  */
  @Output() onClose: EventEmitter<ContainerTemplateComponent> = new EventEmitter<ContainerTemplateComponent>();

  /**
   * Window minimize event emitter
   */
  @Output() onMinimize: EventEmitter<ContainerTemplateComponent> = new EventEmitter<ContainerTemplateComponent>();

  constructor(logService: LogService) {
    super(logService);
  }

  onCloseComponent() {
    this.onClose.emit(this);
  }

  onMinimizeComponent() {
    this.onMinimize.emit(this);
  }
}
