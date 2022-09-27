import { Component, OnInit} from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MembershipAddService } from '../core/service/membership-add.service';
import { UserListService } from '../core/service/user-list.service';
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
  constructor(private profileService: UserProfileService, private memberShipService: MembershipAddService,
    private userListService: UserListService,private toaster:ToastrService) {
  }
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
