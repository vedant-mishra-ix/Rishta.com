import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserProfileService } from 'src/app/core/model/service/user-profile.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  Uservalue = localStorage.getItem('UserName:');
  UserProfile:any=[];
                Id:any;
                UserName:any;
                Email:any;
                Mobile:any;
                DateOfBirth:any;
                CreatedDateTime:any;
                ModifiedDateTime:any;
                Password:any;
                Address:any;
                Cast:any;
                Sex:any
                Religious:any;
                MartialStatus:any;
                MotherTongue:any;
                Height:any;
                Country:any;
                State:any;
                City:any;
                HighestEducation:any;
                Occupation:any;
                AnnualIncome:any;
                ParentMobile:any;
                FamilyType:any;
                FamilyStatus:any;
                ProfilePhoto:any;
  constructor(private ProfileService: UserProfileService, private route : Router) { }


  ngOnInit(): void {
    console.log("USer profiler: " + this.UserProfile);

    this.ProfileService.UserProfile(this.Uservalue ?? '').subscribe(
      {
        next: (res) => {
                this.Id =res.id;
                this.UserName = res.userName
                this.Email = res.email;
                this.Mobile = res.mobile;
                this.DateOfBirth = res.dateOfBirth;
                this.CreatedDateTime = res.createdDateTime;
                this.ModifiedDateTime = res.modifiedDateTime;
                this.Password = res.password;
                this.Address = res.address;
                this.Cast = res.cast;
                this.Sex = res.sex;
                this.Religious = res.religious;
                this.MartialStatus = res.martialStatus;
                this.MotherTongue = res.motherTongue;
                this.Height = res.height;
                this.Country = res.country;
                this.State = res.state;
                this.City = res.city;
                this.HighestEducation = res.highestEducation;
                this.Occupation = res.occupation;
                this.AnnualIncome = res.annualIncome;
                this.ParentMobile = res.parentMobile;
                this.FamilyType = res.familyType;
                this.FamilyStatus = res.familyStatus;
                this.ProfilePhoto = res.profilePhoto;
          console.log("User profile value: " + this.ProfilePhoto);
          localStorage.setItem("Id:",this.Id);
          localStorage.setItem("ProfilePhoto:",this.ProfilePhoto);
        }
      })
  }

  Update(id:any)
  {
    this.route.navigate([`./User/update/${id}`]);
  }

}
