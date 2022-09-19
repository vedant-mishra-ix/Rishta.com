import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GuardService } from 'src/app/core/guard/guard.service';
import { UserProfileService } from 'src/app/core/model/service/user-profile.service';

@Component({
  selector: 'app-user-header',
  templateUrl: './user-header.component.html',
  styleUrls: ['./user-header.component.css']
})
export class UserHeaderComponent implements OnInit {

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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 97d6a5956686e7f34d963dc30b59020dab2d6a6c
      localStorage.removeItem("City:");
      localStorage.removeItem("Gender:");
      localStorage.removeItem("ProfileMatched:");
      localStorage.removeItem("NotificationCount:");
      localStorage.removeItem("RequestGet:");
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
      localStorage.removeItem("City:");
      localStorage.removeItem("Gender:");
=======
>>>>>>> 76aef980cbfd3b732aa842473a19af63dabac739
>>>>>>> ecefed146e08f8c5d7c4f7dc2d4c85501ecaa656
>>>>>>> 97d6a5956686e7f34d963dc30b59020dab2d6a6c
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
      this.route.navigate(['User']);
    }

    profile()
    {
      this.route.navigate(['User/profile']);
    }
}
