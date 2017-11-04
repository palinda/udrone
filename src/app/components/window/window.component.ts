import { GridsterConfig } from 'angular-gridster2';
import { UserContextService } from '@services/user-context.service';
import { PermissionManagerService } from '@services/permission-manager.service';
import { TrackType } from '@app/defs/track-type';
import { ComponentDef } from '@defs/component-def';
import { LogService } from '@services/log.service';
import { Component, Input, Output, EventEmitter, IterableDiffers, DoCheck } from '@angular/core';
import { PermissionType } from '@defs/permission-type';
import { BaseTemplateComponent } from '@components/base-template.component';
import * as Utils from '@utilities/utils';
import { GridHelper, UGridItem } from '@services/grid-helper';

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

  componentDefList: Array<UGridItem> = [];

  gridHelper: GridHelper;
  configureMode = false;

  differ: any;

  constructor(logService: LogService, private _userContext: UserContextService, differs: IterableDiffers,
  private _permissionMan: PermissionManagerService) {
    super(logService);
    this.gridHelper = new GridHelper((item, itemComponent) => {
      console.log('Resized:' , item, itemComponent);
      this.gridHelper.addUpdatedItem(item, itemComponent);
    },
    (item, itemComponent) => {
      console.log('Changed:' , item, itemComponent);
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

  saveConfigure() {

    let reqCount = 0;
    let errored = false;
    this.gridHelper.getUpdates().forEach( (key, val) => {
      reqCount++;
      this._userContext.addWidgetTemplate(val, (data, err) => {
        reqCount--;
        if (err) {
          errored = true;
        }
        if (reqCount === 0) {
          if (errored) {
            Utils.notifyPop('Failed to update widget properties', 'error');
          } else {
            Utils.notifyPop('Successfully Updated', 'success');
            this.configureWindow(false);
            this.gridHelper.clearUpdates();
          }
        }
      });
    });

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
        this.componentDefList.push(this.gridHelper.createGridItem(def, def.size));
      }
    });
    this.gridHelper.clearUpdates();
  }
}

