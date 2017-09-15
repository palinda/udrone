import { WidgetTemplateComponent } from '@components/widget-template.component';
import { ComponentDef } from '@defs/component-def';
import { ContainerTemplateComponent } from '@components/container-template.component';
import { LogService } from '@services/log.service';
import { Component, OnInit, Type, ComponentFactoryResolver, ViewContainerRef, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.scss']
})
export class DashboardContainerComponent extends ContainerTemplateComponent implements OnInit {

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

  ngOnInit() {
  }

  onCloseComponent() {
    this.onClose.emit(this);
  }

  onMinimizeComponent() {
    this.onMinimize.emit(this);
  }
}
