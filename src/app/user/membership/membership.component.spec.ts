import { ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<<< HEAD:src/app/user/membership/membership.component.spec.ts
import { MembershipComponent } from './membership.component';

describe('MembershipComponent', () => {
  let component: MembershipComponent;
  let fixture: ComponentFixture<MembershipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MembershipComponent ]
========
<<<<<<< HEAD
import { FriendListComponent } from './friend-list.component';

describe('FriendListComponent', () => {
  let component: FriendListComponent;
  let fixture: ComponentFixture<FriendListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FriendListComponent ]
>>>>>>>> a51345ccd83c29617aa61a45094d47c0ce2d6ca7:src/app/user/friend-list/friend-list.component.spec.ts
=======
import { UserHeaderComponent } from './user-header.component';

describe('UserHeaderComponent', () => {
  let component: UserHeaderComponent;
  let fixture: ComponentFixture<UserHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserHeaderComponent ]
>>>>>>>> 97d6a5956686e7f34d963dc30b59020dab2d6a6c:src/app/share/component/user-header/user-header.component.spec.ts
>>>>>>> a51345ccd83c29617aa61a45094d47c0ce2d6ca7
    })
    .compileComponents();
  });

  beforeEach(() => {
<<<<<<<< HEAD:src/app/user/membership/membership.component.spec.ts
    fixture = TestBed.createComponent(MembershipComponent);
========
<<<<<<< HEAD
    fixture = TestBed.createComponent(FriendListComponent);
>>>>>>>> a51345ccd83c29617aa61a45094d47c0ce2d6ca7:src/app/user/friend-list/friend-list.component.spec.ts
=======
    fixture = TestBed.createComponent(UserHeaderComponent);
>>>>>>>> 97d6a5956686e7f34d963dc30b59020dab2d6a6c:src/app/share/component/user-header/user-header.component.spec.ts
>>>>>>> a51345ccd83c29617aa61a45094d47c0ce2d6ca7
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
