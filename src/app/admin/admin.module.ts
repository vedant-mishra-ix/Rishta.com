import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { RegisteredComponent } from './registered/registered.component';
import { ReportedProfileComponent } from './reported-profile/reported-profile.component';
import { ShareModule } from '../share/share.module';
import { SubscribersComponent } from './subscribers/subscribers.component';
import{NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AdminComponent,
    RegisteredComponent,
    ReportedProfileComponent,
    SubscribersComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ShareModule,
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule
  ]
})
export class AdminModule { }
