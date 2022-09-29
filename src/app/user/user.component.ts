import { Component, OnInit} from '@angular/core';
import { UserProfileService } from '../core/service/user-profile.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userName = localStorage.getItem("UserName:")
  Id: any;
  profileMatched=localStorage.getItem("ProfileMatched:");
  city = localStorage.getItem("City:");
  gender = localStorage.getItem("Gender:");
  count:any;
  constructor(
    private profileService: UserProfileService
    )
    {}
  ngOnInit(): void {
    this.profileService.userProfile(this.userName ?? '').subscribe(
      {
        next: (res) => {
          localStorage.setItem("Id:", res.id);
          localStorage.setItem("City:", res.city);
          localStorage.setItem("Gender:", res.sex);
        }
      })
  }
}
