import { TestBed, inject } from '@angular/core/testing';

import { ThemeStoreService } from './theme-store.service';

describe('ThemeStoreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ThemeStoreService]
    });
  });

  it('should be created', inject([ThemeStoreService], (service: ThemeStoreService) => {
    expect(service).toBeTruthy();
  }));
});
