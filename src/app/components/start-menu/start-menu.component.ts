import { Size } from '@defs/size';
import { GridHelper } from '@services/grid-helper';
import { PermissionManagerService } from '@services/permission-manager.service';
import { BaseTemplateComponent } from '@components/base-template.component';
import { UserContextService } from '@services/user-context.service';
import { ComponentDef } from '@defs/component-def';
import { Component, OnInit, DoCheck, Input, Output, EventEmitter, Type, ElementRef, IterableDiffers } from '@angular/core';
import { NgGridItemConfig } from 'angular2-grid';

@Component({
  selector: 'app-start-menu',
  templateUrl: './start-menu.component.html',
  styleUrls: ['./start-menu.component.scss']
})
export class StartMenuComponent implements OnInit, DoCheck {

  /**
   * Container definition list
   */
  containerDefList: Array<ComponentDef>;
  differ: any;

  dataSource: Object[] = [];

  gridHelper: GridHelper;

  /**
   * Start menu item select callback
   */
  @Output() onSelectContainer: EventEmitter<ComponentDef> = new EventEmitter<ComponentDef>();

  constructor(private _userContext: UserContextService, private _permissionMan: PermissionManagerService, differs: IterableDiffers) {
    this.gridHelper = new GridHelper({
      'min_width': 50,
      'col_width': 98,
      'row_height': 98,
      'draggable': false,
      'resizable': false
    });
    this.containerDefList = _userContext.containerComponantInsts;
    this.containerDefList.forEach( el => {
      this.addComponentDefToDatasource(el);
    });
    this.differ = differs.find([]).create(null);
  }

  ngOnInit() {

  }

  openComponent(compDef: ComponentDef): void {
    this.onSelectContainer.emit(compDef);
  }

  OnAuthorizedPermission(element: ElementRef) {
    element.nativeElement.parentNode.style.visibility = 'inherit';
  }

  OnUnauthorizedPermission(element: ElementRef) {
    element.nativeElement.parentNode.style.visibility = 'hidden';
  }

  ngDoCheck() {
    const changes = this.differ.diff(this.containerDefList);
    if (changes) {
      changes.forEachAddedItem(r => {
        this.addComponentDefToDatasource(r.item);
      });
      // Handle dynamic remove
      // changes.forEachRemovedItem(r => this.logs.push('removed ' + r.item))
    }
  }

  private addComponentDefToDatasource(def: ComponentDef) {
    if (this._permissionMan.hasOnePermission(def.permissions.permissionGroups)) {
      this.dataSource.push(this.gridHelper.createGridItem(def, new Size('1', '1')));
    }
  }
}
