import { Component, OnInit, ViewChild } from '@angular/core';
import { UserProfileService } from '../core/model/service/user-profile.service';
import { LoginComponent } from '../home/login/login.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userName = localStorage.getItem("UserName:")
  Id:any;
  constructor(private profileService: UserProfileService) {
   }

  ngOnInit(): void {
    this.profileService.userProfile(this.userName ?? '').subscribe(
      {
        next: (res) => {
          localStorage.setItem("Id:",res.id);
        }
      })
  }
}
