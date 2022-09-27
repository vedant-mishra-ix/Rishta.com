import { TestBed } from '@angular/core/testing';

import { RequestProfileService } from './request-profile.service';

describe('RequestProfileService', () => {
  let service: RequestProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RequestProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
