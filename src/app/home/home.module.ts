import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HomelistComponent } from './homelist/homelist.component';
import { CityService } from '../core/model/service/city.service';
import { ShareModule } from '../share/share.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
<<<<<<< HEAD
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
=======
<<<<<<< HEAD
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
=======
<<<<<<< HEAD
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
=======
>>>>>>> 76aef980cbfd3b732aa842473a19af63dabac739
>>>>>>> ecefed146e08f8c5d7c4f7dc2d4c85501ecaa656
>>>>>>> 97d6a5956686e7f34d963dc30b59020dab2d6a6c



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    RegistrationComponent,
    HomelistComponent,
<<<<<<< HEAD
    ForgotPasswordComponent,
=======
<<<<<<< HEAD
    ForgotPasswordComponent,
=======
<<<<<<< HEAD
    ForgotPasswordComponent,
=======
>>>>>>> 76aef980cbfd3b732aa842473a19af63dabac739
>>>>>>> ecefed146e08f8c5d7c4f7dc2d4c85501ecaa656
>>>>>>> 97d6a5956686e7f34d963dc30b59020dab2d6a6c

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    ShareModule,
    ToastrModule.forRoot(),
  ],
  providers:[CityService]
})
export class HomeModule { }
