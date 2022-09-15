import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdminComponent } from './admin.component';
import { RegisteredComponent } from './registered/registered.component';
import { ReportedProfileComponent } from './reported-profile/reported-profile.component';
import { ShareModule } from '../share/share.module';


@NgModule({
  declarations: [
    SidebarComponent,
    AdminComponent,
    RegisteredComponent,
    ReportedProfileComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ShareModule
  ]
})
export class AdminModule { }
