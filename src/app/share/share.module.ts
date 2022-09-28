import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertBoxComponent } from './component/alert-box/alert-box.component';
import { AdminHeaderComponent } from './component/admin-header/admin-header.component';
import { UserHeaderComponent } from './component/user-header/user-header.component';
import { FooterComponent } from './component/footer/footer.component';
import { LoaderComponent } from './component/loader/loader.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UserSidebarComponent } from './component/user-sidebar/user-sidebar.component';
import { AdminSidebarComponent } from './component/admin-sidebar/admin-sidebar.component';

@NgModule({
  declarations: [
    AlertBoxComponent,
    AdminHeaderComponent,
    UserHeaderComponent,
    FooterComponent,
    LoaderComponent,
    UserSidebarComponent,
    AdminSidebarComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
  ],
  exports:[AlertBoxComponent,AdminHeaderComponent,UserSidebarComponent,
          AdminSidebarComponent,UserHeaderComponent,FooterComponent,LoaderComponent]
})
export class ShareModule { }
