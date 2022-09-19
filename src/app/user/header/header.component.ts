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

  userProfile: any;
  userName = localStorage.getItem("UserName:")
  constructor(private route: Router, private authService: GuardService,
    private profileService: UserProfileService) { }
  logOut() {
    this.route.navigate([''])
    localStorage.removeItem("Id:");
    localStorage.removeItem("ProfilePhoto:");
    localStorage.removeItem('role:');
    localStorage.removeItem("UserSpecific:");
    localStorage.removeItem("UserSpecific1:");
    localStorage.removeItem("UserSpecific2:");
    localStorage.removeItem("UserSpecific3:");
    localStorage.removeItem("UserSpecific4:");
    return this.authService.deleteToken();
  }
  ngOnInit(): void {
    this.profileService.userProfile(this.userName ?? '').subscribe(
      {
        next: (res) => {
          this.userProfile = res.profilePhoto;
        }
      })
  }

}
