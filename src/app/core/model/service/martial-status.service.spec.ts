import { TestBed } from '@angular/core/testing';

import { MartialStatusService } from './martial-status.service';

describe('MartialStatusService', () => {
  let service: MartialStatusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MartialStatusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
