import { TestBed } from '@angular/core/testing';

import { VoiceRecognisizeService } from './voice-recognisize.service';

describe('VoiceRecognisizeService', () => {
  let service: VoiceRecognisizeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VoiceRecognisizeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
