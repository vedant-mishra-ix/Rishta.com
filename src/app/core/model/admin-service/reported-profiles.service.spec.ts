import { TestBed } from '@angular/core/testing';

import { ReportedProfilesService } from './reported-profiles.service';

describe('ReportedProfilesService', () => {
  let service: ReportedProfilesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportedProfilesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
