import { TestBed, inject } from '@angular/core/testing';

import { AlphaVantageService } from './alpha-vantage.service';

describe('AlphaVantageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlphaVantageService]
    });
  });

  it('should be created', inject([AlphaVantageService], (service: AlphaVantageService) => {
    expect(service).toBeTruthy();
  }));
});
