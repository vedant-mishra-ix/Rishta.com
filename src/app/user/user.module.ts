import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatchedComponent } from './matched/matched.component';
import { UserComponent } from './user.component';
import { ListComponent } from './list/list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ProfileUpdateComponent } from './profile-update/profile-update.component';
import { ReactiveFormsModule } from '@angular/forms';
import { SpecificProfileComponent } from './specific-profile/specific-profile.component';
import { RequestComponent } from './request/request.component';
import { HistoryComponent } from './history/history.component';
import { MembershipComponent } from './membership/membership.component';
<<<<<<< HEAD
import { MembershipAddComponent } from './membership-add/membership-add.component';
=======
>>>>>>> 04c1c66b1da8c9662dc33a1d379f3a7e351a8219


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    MatchedComponent,
    UserComponent,
    ListComponent,
    UserProfileComponent,
    ProfileUpdateComponent,
    SpecificProfileComponent,
    RequestComponent,
    HistoryComponent,
    MembershipComponent,
<<<<<<< HEAD
    MembershipAddComponent,
=======
>>>>>>> 04c1c66b1da8c9662dc33a1d379f3a7e351a8219
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
  ]
})
export class UserModule { }
