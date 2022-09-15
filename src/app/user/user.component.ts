import { Component, OnInit, ViewChild } from '@angular/core';
import { MembershipAddService } from '../core/model/service/membership-add.service';
import { UserProfileService } from '../core/model/service/user-profile.service';
import { LoginComponent } from '../home/login/login.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  userName = localStorage.getItem("UserName:")
<<<<<<< HEAD
  Id: any;
  constructor(private profileService: UserProfileService, private memberShipService: MembershipAddService) {
  }
=======
  Id:any;
  constructor(private profileService: UserProfileService) {
   }
>>>>>>> 98a1810ba74fc92dc55af00ebe5b1928cad3c302

  ngOnInit(): void {
    this.profileService.userProfile(this.userName ?? '').subscribe(
      {
        next: (res) => {
          localStorage.setItem("Id:", res.id);
        }
      })
  }
}
