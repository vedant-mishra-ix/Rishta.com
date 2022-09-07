import { Component, OnInit, ViewChild } from '@angular/core';
import { UserProfileService } from '../core/model/service/user-profile.service';
import { LoginComponent } from '../home/login/login.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  UserName = localStorage.getItem("UserName:")
  Id:any;
  constructor(private ProfileService: UserProfileService) { }

  ngOnInit(): void {
    this.ProfileService.UserProfile(this.UserName ?? '').subscribe(
      {
        next: (res) => {
          localStorage.setItem("Id:",res.id);
        }
      })
  }

}
