import { TestBed, inject } from '@angular/core/testing';

import { QuandlService } from './quandl.service';

describe('QuandlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuandlService]
    });
  });

  it('should be created', inject([QuandlService], (service: QuandlService) => {
    expect(service).toBeTruthy();
  }));
});
