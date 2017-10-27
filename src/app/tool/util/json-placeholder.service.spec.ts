import { TestBed, inject } from '@angular/core/testing';

import { JsonPlaceholderService } from './json-placeholder.service';

describe('JsonPlaceholderService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JsonPlaceholderService]
    });
  });

  it('should be created', inject([JsonPlaceholderService], (service: JsonPlaceholderService) => {
    expect(service).toBeTruthy();
  }));
});
