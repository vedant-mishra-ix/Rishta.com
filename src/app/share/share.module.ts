import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertBoxComponent } from './component/alert-box/alert-box.component';
import { AdminHeaderComponent } from './component/admin-header/admin-header.component';
import { UserHeaderComponent } from './component/user-header/user-header.component';
import { FooterComponent } from './component/footer/footer.component';
import { LoaderComponent } from './component/loader/loader.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AlertBoxComponent,
    AdminHeaderComponent,
    UserHeaderComponent,
    FooterComponent,
    LoaderComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
  ],
  exports:[AlertBoxComponent,AdminHeaderComponent,UserHeaderComponent,FooterComponent,LoaderComponent]
})
export class ShareModule { }
