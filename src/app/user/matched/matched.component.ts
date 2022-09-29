import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FamilyType } from 'src/app/core/model/family-type';
import { Gender } from 'src/app/core/model/gender';
import { MarriageStatus } from 'src/app/core/model/marriage-status';
import { UserListService } from 'src/app/core/service/user-list.service';

@Component({
  selector: 'app-matched',
  templateUrl: './matched.component.html',
  styleUrls: ['./matched.component.css']
})
export class MatchedComponent implements OnInit {

  gender = Gender;
  martialStatus = MarriageStatus;
  familyType = FamilyType;
  dependentBasedList: any[] = [];
  sex: any;
  martial: any;
  family: any;
  userName: any;
  hidden = false;
  requestSenderId: any;
  userList: any = [];
  id = localStorage.getItem("Id:");
  userGender = localStorage.getItem("Gender:");
  genderValue=false;
  genderList: FormGroup = new FormGroup({});
  username = localStorage.getItem("UserName:");
  constructor(private fb: FormBuilder,private route: Router,
    private userListService: UserListService) {
    this.genderList = this.fb.group({
      Sex: [''],
      MartialStatus: [''],
      FamilyType: [''],
    })
  }
  registeredAccounts() {
    this.userListService.registered(this.id).subscribe({
      next: (res) => {
        for (let i = 0; i < res.length; i++) {
          this.userList.push(res[i]);
        }
      }
    })
  }
  genderData(event: any) {
    this.sex = event;
    if(this.userGender == this.sex)
    {
      this.hidden = true;
      this.genderValue = true;
    }
  }
  martialStatusData(event: any) {
    this.dependentBasedList = [];
    this.martial = event;
  }
  familyTypeData(event: any) {
    this.dependentBasedList = [];
    this.family = event;
  }
  dependentFilter() {
    this.dependentBasedList.length = 0;
    this.userList.length =0;
    this.userListService.registered(this.id).subscribe({
      next: (res) => {
        for (let i = 0; i < res.length; i++) {
          if ((res[i].sex == this.sex && res[i].martialStatus == this.martial) &&
            res[i].familyType == this.family) {
            this.dependentBasedList.push(res[i]);
          }
        }
      }
    })
  }
  resetAll() {
    this.genderList.reset();
    this.genderList.patchValue({
      Sex: "- Select Gender -",
      MartialStatus: "- Select MartialStatus -",
      FamilyType: "- Select FamilyType -",
    })
    this.dependentBasedList.length = 0;
    this.hidden = false;
    this.registeredAccounts();
  }
  friendProfile(event: any) {
    this.requestSenderId = event.id;
    this.route.navigate([`/user/friends-profile/${this.requestSenderId}`]);
  }
  ngOnInit(): void {
    this.registeredAccounts();
  }

}
