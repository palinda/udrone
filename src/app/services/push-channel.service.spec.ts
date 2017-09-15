import { TestBed, inject } from '@angular/core/testing';

import { PushChannelService } from './push-channel.service';

describe('PushChannelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PushChannelService]
    });
  });

  it('should be created', inject([PushChannelService], (service: PushChannelService) => {
    expect(service).toBeTruthy();
  }));
});
