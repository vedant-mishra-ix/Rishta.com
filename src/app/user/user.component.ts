import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
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
  role = localStorage.getItem("role:");
  constructor(
    private profileService: UserProfileService,
    private route: Router
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
      if(this.role === "Admin")
      {
        this.route.navigate(['/admin']);
      }
  }
}
