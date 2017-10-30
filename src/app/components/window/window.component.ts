import { UserContextService } from '@services/user-context.service';
import { PermissionManagerService } from '@services/permission-manager.service';
import { TrackType } from '@app/defs/track-type';
import { ComponentDef } from '@defs/component-def';
import { LogService } from '@services/log.service';
import { Component, Input, Output, EventEmitter, IterableDiffers, DoCheck } from '@angular/core';
import { PermissionType } from '@defs/permission-type';
import { BaseTemplateComponent } from '@components/base-template.component';
import * as Utils from '@utilities/utils';

/**
 * [Item container CSS Class - wrapper]{@link CSS_CLASS}
 * [Item CSS Class - grid-item]{@link CSS_CLASS}
 */
@Component({
  selector: 'app-window',
  templateUrl: './window.component.html',
  styleUrls: ['./window.component.scss']
})
export class WindowComponent extends BaseTemplateComponent implements DoCheck {

  static key = 'WindowComponent';
  static type = 'WindowComponent';
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
  * Child component definition list
  */
  @TrackType('WIDGET_TEMPLATES')
  @Input() componentDefIDList: Array<string>;

    /**
   * Window close event emitter
  */
  @Output() onClose: EventEmitter<WindowComponent> = new EventEmitter<WindowComponent>();

  /**
   * Window minimize event emitter
   */
  @Output() onMinimize: EventEmitter<WindowComponent> = new EventEmitter<WindowComponent>();

  componentDefList: Array<ComponentDef> = [];

  differ: any;

  constructor(logService: LogService, private _userContext: UserContextService, differs: IterableDiffers,
  private _permissionMan: PermissionManagerService) {
    super(logService);
    this.differ = differs.find([]).create(null);
    if (this.componentDefIDList === undefined) {
      return;
    }
  }


  onCloseComponent() {
    this.onClose.emit(this);
  }

  onMinimizeComponent() {
    this.onMinimize.emit(this);
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
      if (!Utils.isUndefined(def) && this._permissionMan.hasOnePermission(def.permissions.permissionGroups)) {
        this.componentDefList.push(def);
      }
    });
  }
}

