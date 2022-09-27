import { TestBed } from '@angular/core/testing';

import { MembershipProfilesService } from './membership-profiles.service';

describe('MembershipProfilesService', () => {
  let service: MembershipProfilesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MembershipProfilesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
