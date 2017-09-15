import { BaseTemplateComponent } from '@components/base-template.component';
import { UserContextService } from '@services/user-context.service';
import { ComponentDef } from '@defs/component-def';
import { Component, OnInit, Input, Output, EventEmitter, Type } from '@angular/core';

@Component({
  selector: 'app-start-menu',
  templateUrl: './start-menu.component.html',
  styleUrls: ['./start-menu.component.scss']
})
export class StartMenuComponent implements OnInit {

  /**
   * Container definition list
   */
  containerDefList: Array<ComponentDef>;

  /**
   * Start menu item select callback
   */
  @Output() onSelectContainer: EventEmitter<ComponentDef> = new EventEmitter<ComponentDef>();

  constructor(private _userContext: UserContextService) {
    this.containerDefList = _userContext.containerComponantInsts;
  }

  ngOnInit() {

  }

  openComponent(compDef: ComponentDef): void {
    this.onSelectContainer.emit(compDef);
  }

}
