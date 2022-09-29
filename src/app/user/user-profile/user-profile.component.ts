import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserProfileService } from 'src/app/core/service/user-profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  userValue = localStorage.getItem('UserName:');
  userProfile:any=[];
                id:any;
                userName:any;
                email:any;
                mobile:any;
                dateOfBirth:any;
                createdDateTime:any;
                modifiedDateTime:any;
                password:any;
                address:any;
                cast:any;
                sex:any
                religious:any;
                martialStatus:any;
                motherTongue:any;
                height:any;
                country:any;
                state:any;
                city:any;
                highestEducation:any;
                occupation:any;
                annualIncome:any;
                parentMobile:any;
                familyType:any;
                familyStatus:any;
                profilePhoto:any;
  constructor(
    private profileService: UserProfileService,
     private route : Router)
     { }
  ngOnInit(): void {
    this.profileService.userProfile(this.userValue ?? '').subscribe(
      {
        next: (res) => {
                this.id =res.id;
                this.userName = res.userName
                this.email = res.email;
                this.mobile = res.mobile;
                this.dateOfBirth = res.dateOfBirth;
                this.createdDateTime = res.createdDateTime;
                this.modifiedDateTime = res.modifiedDateTime;
                this.password = res.password;
                this.address = res.address;
                this.cast = res.cast;
                this.sex = res.sex;
                this.religious = res.religious;
                this.martialStatus = res.martialStatus;
                this.motherTongue = res.motherTongue;
                this.height = res.height;
                this.country = res.country;
                this.state = res.state;
                this.city = res.city;
                this.highestEducation = res.highestEducation;
                this.occupation = res.occupation;
                this.annualIncome = res.annualIncome;
                this.parentMobile = res.parentMobile;
                this.familyType = res.familyType;
                this.familyStatus = res.familyStatus;
                this.profilePhoto = res.profilePhoto;
          localStorage.setItem("ProfilePhoto:",this.profilePhoto);
        }
      })
  }
  update(id:any)
  {
    this.route.navigate([`./user/update/${id}`]);
  }
}
