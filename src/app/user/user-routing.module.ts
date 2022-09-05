import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditComponent } from './edit/edit.component';
import { ListComponent } from './list/list.component';
import { MatchedComponent } from './matched/matched.component';
import { ProfileUpdateComponent } from './profile-update/profile-update.component';
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
        path:'matche',
        component:MatchedComponent
      },
      {
        path:'edit/:id',
        component:EditComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
