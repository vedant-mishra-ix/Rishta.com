import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FamilyStatus } from 'src/app/core/model/family-status';
import { FamilyType } from 'src/app/core/model/family-type';
import { Gender } from 'src/app/core/model/gender';
import { MarriageStatus } from 'src/app/core/model/marriage-status';
import { MotherTongue } from 'src/app/core/model/mother-tongue';
import { Religious } from 'src/app/core/model/religious';
import { CityService } from 'src/app/core/model/service/city.service';
import { RegistrationService } from 'src/app/core/model/service/registration.service';
import { StateService } from 'src/app/core/model/service/state.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  Gender = Gender;
  MarriageStatus = MarriageStatus;
  MotherTongue = MotherTongue;
  Religious = Religious;
  FamilyType = FamilyType;
  FamilyStatus = FamilyStatus;
  Registration : FormGroup = new FormGroup({});
  Files !: File;
  CityList:any=[];
  StateList:any=[];

  constructor(private fb : FormBuilder, private cityService: CityService,
    private stateService:StateService,private RegistrationService : RegistrationService,
    private Route: Router)
  {
    this.Registration = this.fb.group({
      UserName:['',Validators.required],
      Email:['',Validators.required],
      Mobile:['',Validators.required],
      Dob:['',Validators.required],
      Password:['',Validators.required],
      Address:['',Validators.required],
      Cast:[''],
      Sex:['',Validators.required],
      Religious:[''],
      MartialStatus:[''],
      MotherTongue:[''],
      Height:[''],
      Country:[''],
      State:[''],
      City:[''],
      HighestEducation:[''],
      Occupation:[''],
      AnnualIncome:[''],
      ParentMobile:[''],
      FamilyType:[''],
      FamilyStatus:[''],
      PhotoUpload:[this.Files],
    })
   }

   Submit()
   {
    this.RegistrationService.Registration(this.Registration.value).subscribe((res) =>
      {
        alert("Registration Done: "+ res.UserName);
        this.Route.navigate(['login']);
      },error => {alert("Something Wrong")}
      )
    console.log(this.Registration.value);
   // this.Registration.reset();
   }

   get RegistrationValidation()
   {
    return this.Registration.controls;
   }

  ngOnInit(): void {
    this.GetCity();
    this.GetState();
  }

  GetCity()
  {
    this.cityService.GetCityData().subscribe(res => {
      this.CityList = res;
    })
  }
  GetState()
  {
    this.stateService.GetStateData().subscribe(res => {
      this.StateList = res;
    })
  }

}
