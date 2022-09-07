import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportedProfileComponent } from './reported-profile.component';

describe('ReportedProfileComponent', () => {
  let component: ReportedProfileComponent;
  let fixture: ComponentFixture<ReportedProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportedProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportedProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
