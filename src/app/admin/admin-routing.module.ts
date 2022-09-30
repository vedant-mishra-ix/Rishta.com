import {NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { RegisteredComponent } from './registered/registered.component';
import { ReportedProfileComponent } from './reported-profile/reported-profile.component';
import { SubscribersComponent } from './subscribers/subscribers.component';

const routes: Routes = [
  {
    path:"",
    component:AdminComponent,
    children:[
      {
        path:"registered",
        component:RegisteredComponent
      },
      {
        path:"reported",
        component:ReportedProfileComponent
      },
      {
        path:"subscriber",
        component:SubscribersComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
