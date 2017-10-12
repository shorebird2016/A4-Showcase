import { TestBed, inject } from '@angular/core/testing';

import { SearchInfoService } from './search-info.service';

describe('SearchInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SearchInfoService]
    });
  });

  it('should be created', inject([SearchInfoService], (service: SearchInfoService) => {
    expect(service).toBeTruthy();
  }));
});
