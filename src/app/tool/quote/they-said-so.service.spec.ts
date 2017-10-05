import { TestBed, inject } from '@angular/core/testing';

import { TheySaidSoService } from './they-said-so.service';

describe('TheySaidSoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TheySaidSoService]
    });
  });

  it('should be created', inject([TheySaidSoService], (service: TheySaidSoService) => {
    expect(service).toBeTruthy();
  }));
});
