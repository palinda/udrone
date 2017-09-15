import { LogLevel } from 'log4ts/build/LogLevel';
import { MockLogService } from './../mock/log-service.mock';
import { Http, HttpModule } from '@angular/http';
/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { LogService } from './log.service';

describe('LogService', () => {

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpModule
      ],
      providers: [
        LogService,
        MockLogService
      ]
    });
  });

  it('should ...', inject([LogService, MockLogService], (service: LogService, mockLog: MockLogService) => {
    expect(service).toBeTruthy();
    expect(mockLog).toBeTruthy();
  }));

  it('should log initialized', inject([LogService, MockLogService], (service: LogService, mockLog: MockLogService) => {
    expect(service.log).toBeTruthy();
  }));

  it('should log level initialized', inject([LogService, MockLogService], (service: LogService, mockLog: MockLogService) => {
    expect(service.$config.getLevel()).toBe(LogLevel.ALL);
  }));

    it('should log info', inject([LogService, MockLogService], (service: LogService, mockLog: MockLogService) => {
    expect(service.printInfo('Test Info')).toBeUndefined();
    expect(mockLog.printInfo('Test Info')).toBeUndefined();
  }));

  it('should log error', inject([LogService, MockLogService], (service: LogService, mockLog: MockLogService) => {
    expect(service.printError('Test Error')).toBeUndefined();
    expect(mockLog.printError('Test Error')).toBeUndefined();
  }));

  it('should log warn', inject([LogService, MockLogService], (service: LogService, mockLog: MockLogService) => {
    expect(service.printWarn('Test Warn')).toBeUndefined();
    expect(mockLog.printWarn('Test Warn')).toBeUndefined();
  }));

  it('should log trace', inject([LogService, MockLogService], (service: LogService, mockLog: MockLogService) => {
    expect(service.printTrace('Test Trace')).toBeUndefined();
    expect(mockLog.printTrace('Test Trace')).toBeUndefined();
  }));

  it('should log debug', inject([LogService, MockLogService], (service: LogService, mockLog: MockLogService) => {
    expect(service.printDebug('Test Debug')).toBeUndefined();
    expect(mockLog.printDebug('Test Debug')).toBeUndefined();
  }));

  it('should log fatal', inject([LogService, MockLogService], (service: LogService, mockLog: MockLogService) => {
    expect(service.printFatal('Test Fatal')).toBeUndefined();
    expect(mockLog.printFatal('Test Fatal')).toBeUndefined();
  }));

  it('should log', inject([LogService, MockLogService], (service: LogService, mockLog: MockLogService) => {
    expect(service.printLog('Test Log')).toBeUndefined();
    expect(mockLog.printLog('Test Log')).toBeUndefined();
  }));
});
