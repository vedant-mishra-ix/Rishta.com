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
import { CityService } from '../core/service/city.service';
import { ShareModule } from '../share/share.module';
import { ToastrModule } from 'ngx-toastr';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    RegistrationComponent,
    HomelistComponent,
    ForgotPasswordComponent,

  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    ReactiveFormsModule,
    ShareModule,
    ToastrModule.forRoot(),
    NgbProgressbarModule,
  ],
  providers:[CityService]
})
export class HomeModule { }
