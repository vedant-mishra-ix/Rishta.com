import { TestBed } from '@angular/core/testing';

import { FamilyTypeService } from './family-type.service';

describe('FamilyTypeService', () => {
  let service: FamilyTypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FamilyTypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
