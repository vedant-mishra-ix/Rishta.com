import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FriendListComponent } from './friend-list/friend-list.component';
import { HistoryComponent } from './history/history.component';
import { ListComponent } from './list/list.component';
import { MatchedComponent } from './matched/matched.component';
import { MembershipAddComponent } from './membership-add/membership-add.component';
import { MembershipComponent } from './membership/membership.component';
import { ProfileMatchedComponent } from './profile-matched/profile-matched.component';
import { ProfileUpdateComponent } from './profile-update/profile-update.component';
import { RequestComponent } from './request/request.component';
import { SpecificProfileComponent } from './specific-profile/specific-profile.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserComponent } from './user.component';

const routes: Routes = [
  {
    path:'',
    component:UserComponent,
    children:[
      {
        path:'',
        component:ListComponent
      },
      {
        path:'profile',
        component:UserProfileComponent
      },
      {
        path:"update/:Id",
        component:ProfileUpdateComponent
      },
      {
        path:'preference',
        component:MatchedComponent
      },
      {
        path:'specific',
        component:SpecificProfileComponent
      },
      {
        path:'request',
        component:RequestComponent
      },
      {
        path:'history',
        component:HistoryComponent
      },
      {
        path:'membership',
        component:MembershipComponent
      },
      {
        path:'addmembership',
        component:MembershipAddComponent
      },
      {
        path:'matches',
        component:ProfileMatchedComponent
      },
      {
        path:'friends',
        component:FriendListComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }