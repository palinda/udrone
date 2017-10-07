import { ComponentDef } from '@defs/component-def';
import { TrackType } from '@defs/track-type';
import { PermissionManagerService } from '@services/permission-manager.service';
import { UserContextService } from '@services/user-context.service';
import { LogService } from '@services/log.service';
import { ContainerTemplateComponent } from '@components/container-template.component';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-query-container',
  templateUrl: './query-container.component.html',
  styleUrls: ['./query-container.component.scss']
})
export class QueryContainerComponent extends ContainerTemplateComponent implements OnInit {

  static key = 'QueryContainerComponent';
    /**
   * Child component definition
   */
  @TrackType('QUERY_TEMPLATES')
  @Input() componentDefID: string;

  queryDef: ComponentDef;

  constructor(_logService: LogService, private _userContext: UserContextService, private _permissionMan: PermissionManagerService) {
    super(_logService);
  }

  ngOnInit() {
    this.queryDef = this._userContext.findQueryDef(this.componentDefID);
  }

}
