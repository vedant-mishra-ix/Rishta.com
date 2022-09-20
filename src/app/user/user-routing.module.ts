import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FriendListComponent } from './friend-list/friend-list.component';
import { HistoryComponent } from './history/history.component';
import { ListComponent } from './list/list.component';
import { MatchedComponent } from './matched/matched.component';
<<<<<<< HEAD
import { MembershipAddComponent } from './membership-add/membership-add.component';
import { MembershipComponent } from './membership/membership.component';
import { ProfileMatchedComponent } from './profile-matched/profile-matched.component';
=======
<<<<<<< HEAD
import { MembershipAddComponent } from './membership-add/membership-add.component';
import { MembershipComponent } from './membership/membership.component';
import { ProfileMatchedComponent } from './profile-matched/profile-matched.component';
=======
<<<<<<< HEAD
import { MembershipAddComponent } from './membership-add/membership-add.component';
import { MembershipComponent } from './membership/membership.component';
import { ProfileMatchedComponent } from './profile-matched/profile-matched.component';
=======
<<<<<<< HEAD
import { MembershipAddComponent } from './membership-add/membership-add.component';
import { MembershipComponent } from './membership/membership.component';
import { ProfileMatchedComponent } from './profile-matched/profile-matched.component';
=======
<<<<<<< HEAD
import { MembershipAddComponent } from './membership-add/membership-add.component';
=======
<<<<<<< HEAD
import { MembershipAddComponent } from './membership-add/membership-add.component';
=======
<<<<<<< HEAD
import { MembershipAddComponent } from './membership-add/membership-add.component';
=======
>>>>>>> 04c1c66b1da8c9662dc33a1d379f3a7e351a8219
>>>>>>> 98a1810ba74fc92dc55af00ebe5b1928cad3c302
>>>>>>> 1a5366669bdaca024c8077996839e0d6ef746a42
import { MembershipComponent } from './membership/membership.component';
>>>>>>> 76aef980cbfd3b732aa842473a19af63dabac739
>>>>>>> ecefed146e08f8c5d7c4f7dc2d4c85501ecaa656
>>>>>>> 97d6a5956686e7f34d963dc30b59020dab2d6a6c
>>>>>>> a51345ccd83c29617aa61a45094d47c0ce2d6ca7
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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 98a1810ba74fc92dc55af00ebe5b1928cad3c302
>>>>>>> 1a5366669bdaca024c8077996839e0d6ef746a42
>>>>>>> 76aef980cbfd3b732aa842473a19af63dabac739
>>>>>>> ecefed146e08f8c5d7c4f7dc2d4c85501ecaa656
>>>>>>> 97d6a5956686e7f34d963dc30b59020dab2d6a6c
>>>>>>> a51345ccd83c29617aa61a45094d47c0ce2d6ca7
      },
      {
        path:'addmembership',
        component:MembershipAddComponent
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> ecefed146e08f8c5d7c4f7dc2d4c85501ecaa656
>>>>>>> 97d6a5956686e7f34d963dc30b59020dab2d6a6c
>>>>>>> a51345ccd83c29617aa61a45094d47c0ce2d6ca7
      },
      {
        path:'matches',
        component:ProfileMatchedComponent
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> a51345ccd83c29617aa61a45094d47c0ce2d6ca7
      },
      {
        path:'friends',
        component:FriendListComponent
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 04c1c66b1da8c9662dc33a1d379f3a7e351a8219
>>>>>>> 98a1810ba74fc92dc55af00ebe5b1928cad3c302
>>>>>>> 1a5366669bdaca024c8077996839e0d6ef746a42
>>>>>>> 76aef980cbfd3b732aa842473a19af63dabac739
>>>>>>> ecefed146e08f8c5d7c4f7dc2d4c85501ecaa656
>>>>>>> 97d6a5956686e7f34d963dc30b59020dab2d6a6c
>>>>>>> a51345ccd83c29617aa61a45094d47c0ce2d6ca7
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
