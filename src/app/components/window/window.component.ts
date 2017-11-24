import { MenuComponent } from './../menu/menu.component';
import { GridsterConfig } from 'angular-gridster2';
import { UserContextService } from '@services/user-context.service';
import { PermissionManagerService } from '@services/permission-manager.service';
import { TrackType } from '@defs/track-type';
import { ComponentDef } from '@defs/component-def';
import { LogService } from '@services/log.service';
import { Component, Input, Output, EventEmitter, IterableDiffers, DoCheck } from '@angular/core';
import { PermissionType } from '@defs/permission-type';
import { BaseTemplateComponent } from '@components/base-template.component';
import * as Utils from '@utilities/utils';
import { GridHelper, UGridItem } from '@services/grid-helper';
import { WindowWidgetDef } from '@app/defs/window-widget-def';
import { ResizeService } from '@services/resize.service';


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
  @Input() componentDefIDList: Array<WindowWidgetDef>;

    /**
   * Window close event emitter
  */
  @Output() onClose: EventEmitter<WindowComponent> = new EventEmitter<WindowComponent>();

  /**
   * Window minimize event emitter
   */
  @Output() onMinimize: EventEmitter<WindowComponent> = new EventEmitter<WindowComponent>();

  componentDefList: Array<UGridItem> = [];

  gridHelper: GridHelper;
  configureMode = false;

  differ: any;

  constructor(logService: LogService, private _userContext: UserContextService, differs: IterableDiffers,
  private _permissionMan: PermissionManagerService, resizeService: ResizeService) {
    super(logService, resizeService);
    this.gridHelper = new GridHelper((item, itemComponent) => {
      const def = this.gridHelper.addUpdatedItem(item, itemComponent);
      if (def) {
        this.resizeService.triggerResize(def.componentDefID, def.size);
      }
    },
    (item, itemComponent) => {
      this.gridHelper.addUpdatedItem(item, itemComponent);
    });

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

  configureWindow(enable: boolean) {
    this.configureMode = enable;
    this.gridHelper.options.draggable.enabled = enable;
    this.gridHelper.options.resizable.enabled = enable;
    this.gridHelper.options.api.optionsChanged();
  }

  cancelConfigure() {
    this.componentDefList = [];
    this.updateComponentDefs();
    this.gridHelper.clearUpdates();
    this.configureWindow(false);
  }

  saveConfigure() {

    const updateList = this.gridHelper.getUpdates().values();
    for (const key in this.componentDefIDList) {
      if (this.componentDefIDList.hasOwnProperty(key)) {
        if (!this.gridHelper.getUpdates().contains(this.componentDefIDList[key].componentDefID)) {
          updateList.push(this.componentDefIDList[key]);
        }
      }
    }
    const def = Utils.deepCopy(this.componentDef);
    def.inputs['componentDefIDList'] = updateList;
    this._userContext.addWindowTemplate(def, (data, err) => {

      if (err) {
        Utils.notifyPop('Failed to update widget properties', 'error');
      } else {
        Utils.notifyPop('Successfully Updated', 'success');
        this.configureWindow(false);
        this.gridHelper.clearUpdates();
      }
    });

  }

  ngDoCheck() {
    const change = this.differ.diff(this.componentDefIDList);
    if (change) {
      this.updateComponentDefs();
    }
  }

  private updateComponentDefs() {
    this.componentDefIDList.forEach( windowWidget => {
      const def: ComponentDef = this._userContext.findWidgetDef(windowWidget.componentDefID);
      if (!Utils.isUndefined(def) && this._permissionMan.hasOnePermission(def.permissions.permissionGroups)) {
        this.componentDefList.push(this.gridHelper.createGridItem(def, Utils.deepCopy(windowWidget)));
      }
    });
    this.gridHelper.clearUpdates();
  }
}

