import { TestBed } from '@angular/core/testing';

import { RegisteredDeleteService } from './registered-delete.service';

describe('RegisteredDeleteService', () => {
  let service: RegisteredDeleteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisteredDeleteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
