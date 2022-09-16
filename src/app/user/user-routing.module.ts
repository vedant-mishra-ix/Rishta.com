import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistoryComponent } from './history/history.component';
import { ListComponent } from './list/list.component';
import { MatchedComponent } from './matched/matched.component';
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
>>>>>>> 98a1810ba74fc92dc55af00ebe5b1928cad3c302
>>>>>>> 1a5366669bdaca024c8077996839e0d6ef746a42
      },
      {
        path:'addmembership',
        component:MembershipAddComponent
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> 04c1c66b1da8c9662dc33a1d379f3a7e351a8219
>>>>>>> 98a1810ba74fc92dc55af00ebe5b1928cad3c302
>>>>>>> 1a5366669bdaca024c8077996839e0d6ef746a42
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
