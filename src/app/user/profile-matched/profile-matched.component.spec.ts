import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileMatchedComponent } from './profile-matched.component';

describe('ProfileMatchedComponent', () => {
  let component: ProfileMatchedComponent;
  let fixture: ComponentFixture<ProfileMatchedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfileMatchedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfileMatchedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
