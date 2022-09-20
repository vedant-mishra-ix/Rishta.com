import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdminComponent } from './admin.component';
import { RegisteredComponent } from './registered/registered.component';
import { ReportedProfileComponent } from './reported-profile/reported-profile.component';
import { ShareModule } from '../share/share.module';
import { SubscribersComponent } from './subscribers/subscribers.component';
<<<<<<< HEAD
import{NgxPaginationModule} from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';

=======
<<<<<<< HEAD
import{NgxPaginationModule} from 'ngx-pagination';

=======
<<<<<<< HEAD
import{NgxPaginationModule} from 'ngx-pagination';
=======
>>>>>>> ecefed146e08f8c5d7c4f7dc2d4c85501ecaa656
>>>>>>> 97d6a5956686e7f34d963dc30b59020dab2d6a6c
>>>>>>> a51345ccd83c29617aa61a45094d47c0ce2d6ca7


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
<<<<<<< HEAD
    NgxPaginationModule,
    Ng2SearchPipeModule,
    FormsModule
=======
    NgxPaginationModule
>>>>>>> a51345ccd83c29617aa61a45094d47c0ce2d6ca7
  ]
})
export class AdminModule { }
