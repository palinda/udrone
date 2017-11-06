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
  windowDefList: Array<ComponentDef>;
  differ: any;

  dataSource: Object[] = [];
  /**
   * Start menu item select callback
   */
  @Output() onSelectContainer: EventEmitter<ComponentDef> = new EventEmitter<ComponentDef>();

  constructor(private _userContext: UserContextService, private _permissionMan: PermissionManagerService, differs: IterableDiffers) {
    this.windowDefList = _userContext.windowInsts;
    this.windowDefList.forEach( el => {
    });
    this.differ = differs.find([]).create(null);
  }

  ngOnInit() {

  }

  openComponent(compDef: ComponentDef): void {
    console.log('Clicked open component: ', compDef);
    this.onSelectContainer.emit(compDef);
  }

  OnAuthorizedPermission(element: ElementRef) {
    element.nativeElement.parentNode.style.visibility = 'inherit';
  }

  OnUnauthorizedPermission(element: ElementRef) {
    element.nativeElement.parentNode.style.visibility = 'hidden';
  }

  ngDoCheck() {
    const changes = this.differ.diff(this.windowDefList);
    if (changes) {
      changes.forEachAddedItem(r => {
      });
      // Handle dynamic remove
      // changes.forEachRemovedItem(r => this.logs.push('removed ' + r.item))
    }
  }

}
