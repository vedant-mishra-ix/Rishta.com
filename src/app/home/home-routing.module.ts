import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { HomeComponent } from './home.component';
import { HomelistComponent } from './homelist/homelist.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent,
    children:[
      {
        path:"",
        component:HomelistComponent
      },
      {
        path:"about",
        component:AboutComponent
      },
      {
        path:"contact",
        component:ContactComponent
      },
      {
        path:"login",
        component:LoginComponent
      },
      {
        path:"registration",
        component:RegistrationComponent
      },
      {
        path:"forgot",
        component:ForgotPasswordComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
