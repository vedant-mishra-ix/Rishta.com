import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { MatchedComponent } from './matched/matched.component';
import { EditComponent } from './edit/edit.component';
import { UserComponent } from './user.component';
import { ListComponent } from './list/list.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ProfileUpdateComponent } from './profile-update/profile-update.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    MatchedComponent,
    EditComponent,
    UserComponent,
    ListComponent,
    UserProfileComponent,
    ProfileUpdateComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
  ]
})
export class UserModule { }
