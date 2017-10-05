import { TestBed, inject } from '@angular/core/testing';

import { AlchemyService } from './alchemy.service';

describe('AlchemyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlchemyService]
    });
  });

  it('should be created', inject([AlchemyService], (service: AlchemyService) => {
    expect(service).toBeTruthy();
  }));
});
