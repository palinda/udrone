import { Size } from '@defs/size';
import { GridHelper } from '@services/grid-helper';
import { PermissionManagerService } from '@services/permission-manager.service';
import { BaseTemplateComponent } from '@components/base-template.component';
import { UserContextService } from '@services/user-context.service';
import { ComponentDef } from '@defs/component-def';
import { Component, OnInit, DoCheck, Input, Output, EventEmitter, Type, ElementRef, IterableDiffers } from '@angular/core';
import { NgGridItemConfig } from 'angular2-grid';

@Component({
  selector: 'app-tile-grid',
  templateUrl: './tile-grid.component.html',
  styleUrls: ['./tile-grid.component.scss']
})
export class TileGridComponent {

  @Input() windowDefList: Array<ComponentDef>;

  @Output() onSelectContainer: EventEmitter<ComponentDef> = new EventEmitter<ComponentDef>();

  constructor() {
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
}
