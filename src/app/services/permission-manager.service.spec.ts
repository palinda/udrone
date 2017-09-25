import { TestBed, inject } from '@angular/core/testing';

import { PermissionManagerService } from './permission-manager.service';

describe('PermissionManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PermissionManagerService]
    });
  });

  it('should be created', inject([PermissionManagerService], (service: PermissionManagerService) => {
    expect(service).toBeTruthy();
  }));
});
