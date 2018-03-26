import { TestBed, inject } from '@angular/core/testing';

import { EvetsService } from './evets.service';

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
