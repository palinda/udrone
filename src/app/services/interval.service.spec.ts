/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { IntervalService } from './interval.service';

describe('IntervalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IntervalService]
    });
  });

  it('should ...', inject([IntervalService], (service: IntervalService) => {
    expect(service).toBeTruthy();
  }));

  it('should set/unset interval', inject([IntervalService], (service: IntervalService) => {
    const interval = service.setInterval(() => {
      console.log('Timer stated');
    }, 10);
    expect(interval).toBeTruthy();

    service.clearInterval(interval);
    expect(interval).toBeUndefined();
  }));
});
