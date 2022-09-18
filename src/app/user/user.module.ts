import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
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
import { MembershipAddComponent } from './membership-add/membership-add.component';
import { ShareModule } from '../share/share.module';
import { ProfileMatchedComponent } from './profile-matched/profile-matched.component';


@NgModule({
  declarations: [
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
    MembershipAddComponent,
    ProfileMatchedComponent,
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    ShareModule
  ]
})
export class UserModule { }
