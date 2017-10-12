import { TestBed, inject } from '@angular/core/testing';

import { AppModelService } from './app-model.service';

describe('AppModelService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AppModelService]
    });
  });

  it('should be created', inject([AppModelService], (service: AppModelService) => {
    expect(service).toBeTruthy();
  }));
});
