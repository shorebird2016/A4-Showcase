import { TestBed, inject } from '@angular/core/testing';

import { MarkitService } from './markit.service';

describe('MarkitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MarkitService]
    });
  });

  it('should be created', inject([MarkitService], (service: MarkitService) => {
    expect(service).toBeTruthy();
  }));
});
