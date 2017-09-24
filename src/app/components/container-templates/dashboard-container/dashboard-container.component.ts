import { UserContextService } from '@services/user-context.service';
import { DynamicMsg } from '@defs/dynamic-msg';
import { TrackType } from '@app/defs/track-type';
import { WidgetTemplateComponent } from '@components/widget-template.component';
import { ComponentDef } from '@defs/component-def';
import { ContainerTemplateComponent } from '@components/container-template.component';
import { LogService } from '@services/log.service';
import { Component, OnInit, DoCheck, Type, ViewContainerRef, Output, EventEmitter, Input, IterableDiffers } from '@angular/core';
import { ListType } from '@defs/list-type';

@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.scss']
})
export class DashboardContainerComponent extends ContainerTemplateComponent implements OnInit, DoCheck {

    /**
   * Child component definition list
   */
  @TrackType('WIDGET_TEMPLATES')
  @Input() componentDefIDList: Array<string>;

 componentDefList: Array<ComponentDef> = [];
 differ: any;
  /**
   * Window close event emitter
   */
  @Output() onClose: EventEmitter<ContainerTemplateComponent> = new EventEmitter<ContainerTemplateComponent>();

  /**
   * Window minimize event emitter
   */
  @Output() onMinimize: EventEmitter<ContainerTemplateComponent> = new EventEmitter<ContainerTemplateComponent>();

  constructor(logService: LogService, private _userContext: UserContextService, differs: IterableDiffers) {
    super(logService);
    this.differ = differs.find([]).create(null);
    if (this.componentDefIDList === undefined) {
      return;
    }
    this.updateComponentDefs();
  }

  ngOnInit() {
  }

  ngDoCheck() {
    const change = this.differ.diff(this.componentDefIDList);
    if (change) {
      this.updateComponentDefs();
    }
  }

  private updateComponentDefs() {
    this.componentDefIDList.forEach( id => {
      const def: ComponentDef = this._userContext.findWidgetDef(id);
      if (def !== undefined) {
        this.componentDefList.push(def);
      }
    });
  }

  onCloseComponent() {
    this.onClose.emit(this);
  }

  onMinimizeComponent() {
    this.onMinimize.emit(this);
  }
}
