import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertBoxComponent } from './component/alert-box/alert-box.component';
import { AdminHeaderComponent } from './component/admin-header/admin-header.component';
import { UserHeaderComponent } from './component/user-header/user-header.component';



@NgModule({
  declarations: [
    AlertBoxComponent,
    AdminHeaderComponent,
    UserHeaderComponent,
  ],
  imports: [
    CommonModule
  ],
  exports:[AlertBoxComponent,AdminHeaderComponent,UserHeaderComponent]
})
export class ShareModule { }
