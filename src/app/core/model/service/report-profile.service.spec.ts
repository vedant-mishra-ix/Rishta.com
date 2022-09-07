import { TestBed } from '@angular/core/testing';

import { ReportProfileService } from './report-profile.service';

describe('ReportProfileService', () => {
  let service: ReportProfileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportProfileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
