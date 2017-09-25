import { Injectable } from '@angular/core';
import { PermissionService } from 'angular2-permission';

@Injectable()
export class PermissionManagerService {

  userRole: string;

  constructor(private _permissionService: PermissionService) {
    this.addPermission('WIDGET_CREATE');
    this.addPermission('BUSINESS_STATS');
  }

  public addPermission(type: string) {
    this._permissionService.add(type);
  }

  public getAllowedPermissions(): string[] {
    return this._permissionService.store;
  }

  public hasOnePermission(types: Array<string>) {
    return this._permissionService.hasOneDefined(types);
  }

}
