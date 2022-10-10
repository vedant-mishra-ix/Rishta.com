import { Component,OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';
import { UserProfileService } from 'src/app/core/service/user-profile.service';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent implements OnInit {
  userProfile: any;
  userName = localStorage.getItem("UserName:");
  refresh = false;
  constructor(private route: Router, private authService: AuthService,
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
      localStorage.removeItem("City:");
      localStorage.removeItem("Gender:");
      localStorage.removeItem("ProfileMatched:");
      localStorage.removeItem("NotificationCount:");
      localStorage.removeItem("RequestGet:");
      localStorage.removeItem("RequestSenderId:");
      localStorage.removeItem("Updatevalue:");
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
    navigateToHome(){
      this.route.navigate(['/user']);
    }
    profile()
    {
      this.route.navigate(['user/profile']);
    }
}
