import { LogService } from '@services/log.service';
import { Component, OnDestroy } from '@angular/core';
import { RefreshService } from '@services/refresh.service';
import { RefreshRequest } from '@defs/refresh-request';
import { PermissionType } from '@defs/permission-type';
import { BaseTemplateComponent } from './base-template.component';
import {Query} from '@defs/query';
import {UMsg} from '@defs/umsg';

@Component({
  selector: 'app-dashboard-widget',
  template: `
  `,
  styles: []
})
export class WidgetTemplateComponent extends BaseTemplateComponent implements OnDestroy   {

  constructor(protected refreshService: RefreshService, protected logService: LogService) {
    super(logService);
  }

  ngOnDestroy(): void {
    this.refreshService.unSubscribeForRefresh(this.id);
  }

  protected listenToPush<T>(cls: new(...args: any[]) => T, _callback: (data: T, error: Error) => void) {
  }

  protected subscribeForRefresh(requests: Array<RefreshRequest<any>>) {
    this.refreshService.subscribeForRefresh(this.id, requests);
  }

  protected onError(error: Error, req: Object) {
    this.logService.printError('Dashboard widget request error:', error);
  }
}
