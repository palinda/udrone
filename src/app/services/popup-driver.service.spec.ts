import { TestBed, inject } from '@angular/core/testing';

import { PopupDriverService } from './popup-driver.service';

describe('PopupDriverService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PopupDriverService]
    });
  });

  it('should be created', inject([PopupDriverService], (service: PopupDriverService) => {
    expect(service).toBeTruthy();
  }));
});
