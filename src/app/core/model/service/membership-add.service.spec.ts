import { TestBed } from '@angular/core/testing';

import { MembershipAddService } from './membership-add.service';

describe('MembershipAddService', () => {
  let service: MembershipAddService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MembershipAddService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
