import { PermissionService, Ng2Permission } from 'angular2-permission';
import { ServiceQueryMock } from '@mock/service-query.mock';
import { LogService } from './log.service';
import { SERVICE_QUERY } from './service-query.provider';
import { MockLogService } from '@mock/log-service.mock';
import { IntervalService } from './interval.service';
import { PermissionManagerService } from './permission-manager.service';
import { ThemeStoreService } from './theme-store.service';
import { TestBed, inject } from '@angular/core/testing';

import { UserContextService } from './user-context.service';

describe('UserContextService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports : [ Ng2Permission ],
      providers: [UserContextService, ThemeStoreService, PermissionManagerService, PermissionService,
        { provide: IntervalService, useValue: new IntervalService() },
        { provide: SERVICE_QUERY, useValue: new ServiceQueryMock()},
        { provide: LogService, useValue: new MockLogService() }]
    });
  });

  it('should be created', inject([UserContextService], (service: UserContextService) => {
    expect(service).toBeTruthy();
  }));
});
