import { TestBed, inject } from '@angular/core/testing';

import { ForismaticService } from './forismatic.service';

describe('ForismaticService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ForismaticService]
    });
  });

  it('should be created', inject([ForismaticService], (service: ForismaticService) => {
    expect(service).toBeTruthy();
  }));
});
