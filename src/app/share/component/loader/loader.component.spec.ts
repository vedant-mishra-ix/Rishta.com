import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<<< HEAD:src/app/share/component/loader/loader.component.spec.ts
import { LoaderComponent } from './loader.component';

describe('LoaderComponent', () => {
  let component: LoaderComponent;
  let fixture: ComponentFixture<LoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoaderComponent ]
========
import { MembershipComponent } from './membership.component';

describe('MembershipComponent', () => {
  let component: MembershipComponent;
  let fixture: ComponentFixture<MembershipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembershipComponent ]
>>>>>>>> 97d6a5956686e7f34d963dc30b59020dab2d6a6c:src/app/user/membership/membership.component.spec.ts
    })
    .compileComponents();
  });

  beforeEach(() => {
<<<<<<<< HEAD:src/app/share/component/loader/loader.component.spec.ts
    fixture = TestBed.createComponent(LoaderComponent);
========
    fixture = TestBed.createComponent(MembershipComponent);
>>>>>>>> 97d6a5956686e7f34d963dc30b59020dab2d6a6c:src/app/user/membership/membership.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
