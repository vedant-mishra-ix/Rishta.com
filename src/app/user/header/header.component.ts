import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { GuardService } from 'src/app/core/guard/guard.service';
import { UserProfileService } from 'src/app/core/model/service/user-profile.service';
import { UserProfileComponent } from '../user-profile/user-profile.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  UserProfile: any;
  UserName = localStorage.getItem("UserName:")
  constructor(private route: Router, private AuthService: GuardService,
    private ProfileService: UserProfileService) { }
  Logout() {
    this.route.navigate([''])
    localStorage.removeItem("Id:");
    localStorage.removeItem("ProfilePhoto:");
    localStorage.removeItem('role:');
    localStorage.removeItem("UserSpecific:");
    localStorage.removeItem("UserSpecific1:");
    localStorage.removeItem("UserSpecific2:");
    localStorage.removeItem("UserSpecific3:");
    localStorage.removeItem("UserSpecific4:");
    return this.AuthService.deleteToken();
  }
  ngOnInit(): void {
    this.ProfileService.UserProfile(this.UserName ?? '').subscribe(
      {
        next: (res) => {
          this.UserProfile = res.profilePhoto;
        }
      })
  }

}
