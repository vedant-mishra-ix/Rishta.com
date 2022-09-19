import { Component, OnInit, ViewChild } from '@angular/core';
<<<<<<< HEAD
import { ToastrService } from 'ngx-toastr';
import { MembershipAddService } from '../core/model/service/membership-add.service';
import { UserListService } from '../core/model/service/user-list.service';
=======
<<<<<<< HEAD
import { ToastrService } from 'ngx-toastr';
import { MembershipAddService } from '../core/model/service/membership-add.service';
import { UserListService } from '../core/model/service/user-list.service';
=======
import { MembershipAddService } from '../core/model/service/membership-add.service';
>>>>>>> ecefed146e08f8c5d7c4f7dc2d4c85501ecaa656
>>>>>>> 97d6a5956686e7f34d963dc30b59020dab2d6a6c
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
=======
<<<<<<< HEAD
>>>>>>> 97d6a5956686e7f34d963dc30b59020dab2d6a6c
  Id: any;
  profileMatched=localStorage.getItem("ProfileMatched:");
  city = localStorage.getItem("City:");
  gender = localStorage.getItem("Gender:");
  count:any;
  constructor(private profileService: UserProfileService, private memberShipService: MembershipAddService,
    private userListService: UserListService,private toaster:ToastrService) {
  }
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
  Id: any;
  constructor(private profileService: UserProfileService, private memberShipService: MembershipAddService) {
  }
=======
<<<<<<< HEAD
  Id: any;
  constructor(private profileService: UserProfileService, private memberShipService: MembershipAddService) {
  }
=======
<<<<<<< HEAD
  Id: any;
  constructor(private profileService: UserProfileService, private memberShipService: MembershipAddService) {
  }
=======
  Id:any;
  constructor(private profileService: UserProfileService) {
   }
>>>>>>> 98a1810ba74fc92dc55af00ebe5b1928cad3c302
>>>>>>> 1a5366669bdaca024c8077996839e0d6ef746a42
>>>>>>> 76aef980cbfd3b732aa842473a19af63dabac739

>>>>>>> ecefed146e08f8c5d7c4f7dc2d4c85501ecaa656
>>>>>>> 97d6a5956686e7f34d963dc30b59020dab2d6a6c
  ngOnInit(): void {
    this.profileService.userProfile(this.userName ?? '').subscribe(
      {
        next: (res) => {
          localStorage.setItem("Id:", res.id);
<<<<<<< HEAD
          localStorage.setItem("City:", res.city);
          localStorage.setItem("Gender:", res.sex);
=======
<<<<<<< HEAD
          localStorage.setItem("City:", res.city);
          localStorage.setItem("Gender:", res.sex);
=======
<<<<<<< HEAD
          localStorage.setItem("City:",res.city);
          localStorage.setItem("Gender:",res.sex);
=======
>>>>>>> 76aef980cbfd3b732aa842473a19af63dabac739
>>>>>>> ecefed146e08f8c5d7c4f7dc2d4c85501ecaa656
>>>>>>> 97d6a5956686e7f34d963dc30b59020dab2d6a6c
        }
      })
  }
}
