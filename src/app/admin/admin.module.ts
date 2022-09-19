import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdminComponent } from './admin.component';
import { RegisteredComponent } from './registered/registered.component';
import { ReportedProfileComponent } from './reported-profile/reported-profile.component';
import { ShareModule } from '../share/share.module';
import { SubscribersComponent } from './subscribers/subscribers.component';
import{NgxPaginationModule} from 'ngx-pagination';


@NgModule({
  declarations: [
    SidebarComponent,
    AdminComponent,
    RegisteredComponent,
    ReportedProfileComponent,
    SubscribersComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ShareModule,
    NgxPaginationModule
  ]
})
export class AdminModule { }
