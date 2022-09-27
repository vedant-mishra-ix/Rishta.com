import { TestBed } from '@angular/core/testing';

import { ProfilUpdateService } from './profil-update.service';

describe('ProfilUpdateService', () => {
  let service: ProfilUpdateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProfilUpdateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
