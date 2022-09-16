import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertBoxComponent } from './component/alert-box/alert-box.component';
import { AdminHeaderComponent } from './component/admin-header/admin-header.component';
import { UserHeaderComponent } from './component/user-header/user-header.component';
<<<<<<< HEAD
import { FooterComponent } from './component/footer/footer.component';
=======
>>>>>>> 1a5366669bdaca024c8077996839e0d6ef746a42



@NgModule({
  declarations: [
    AlertBoxComponent,
    AdminHeaderComponent,
    UserHeaderComponent,
<<<<<<< HEAD
    FooterComponent,
=======
>>>>>>> 1a5366669bdaca024c8077996839e0d6ef746a42
  ],
  imports: [
    CommonModule
  ],
<<<<<<< HEAD
  exports:[AlertBoxComponent,AdminHeaderComponent,UserHeaderComponent,FooterComponent]
=======
  exports:[AlertBoxComponent,AdminHeaderComponent,UserHeaderComponent]
>>>>>>> 1a5366669bdaca024c8077996839e0d6ef746a42
})
export class ShareModule { }
