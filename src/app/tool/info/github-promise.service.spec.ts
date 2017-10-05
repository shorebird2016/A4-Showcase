import { TestBed, inject } from '@angular/core/testing';

import { GithubPromiseService } from './github-promise.service';

describe('GithubPromiseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GithubPromiseService]
    });
  });

  it('should be created', inject([GithubPromiseService], (service: GithubPromiseService) => {
    expect(service).toBeTruthy();
  }));
});
