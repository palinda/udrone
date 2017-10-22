import { Ng2Permission, PermissionService } from 'angular2-permission';
import { TestBed, inject } from '@angular/core/testing';

import { PermissionManagerService } from './permission-manager.service';

describe('PermissionManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [ Ng2Permission ],
      providers: [PermissionManagerService, PermissionService]
    });
  });

  it('should be created', inject([PermissionManagerService], (service: PermissionManagerService) => {
    expect(service).toBeTruthy();
  }));
});
