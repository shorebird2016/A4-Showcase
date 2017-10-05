import { TestBed, inject } from '@angular/core/testing';

import { ApixuService } from './apixu.service';

describe('ApixuService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApixuService]
    });
  });

  it('should be created', inject([ApixuService], (service: ApixuService) => {
    expect(service).toBeTruthy();
  }));
});
