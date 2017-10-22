import { ServiceQueryMock } from '@mock/service-query.mock';
import { MockIntervalService } from '@mock/interval-service.mock';
import { SERVICE_QUERY } from './service-query.provider';
import { LogService } from './log.service';
import { MockLogService } from '@mock/log-service.mock';
import { IntervalService } from './interval.service';
import { TestBed, inject } from '@angular/core/testing';

import { RefreshService } from './refresh.service';

describe('RefreshService', () => {

  const mockIntervalService: MockIntervalService = new MockIntervalService();
  const mockServiceQuery: ServiceQueryMock = new ServiceQueryMock();

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RefreshService,
        { provide: IntervalService, useValue: mockIntervalService },
        { provide: SERVICE_QUERY, useValue: mockServiceQuery},
        { provide: LogService, useValue: new MockLogService() }]
    });
  });

  it('should be created', inject([RefreshService], (service: RefreshService) => {
    expect(service).toBeTruthy();
  }));
});
