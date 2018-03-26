import { TestBed, inject } from '@angular/core/testing';

import { EvetsService } from './events.service';

describe('EvetsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EvetsService]
    });
  });

  it('should be created', inject([EvetsService], (service: EvetsService) => {
    expect(service).toBeTruthy();
  }));
});
