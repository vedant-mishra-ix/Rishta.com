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
  Files!: File;
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
      ProfilePhoto:[''],
      files:[''],
      fileSource: [''],
    })
   }

   Submit()
   {
    const formData:any = new FormData();
    formData.append('files', this.Registration.get('fileSource')?.value);
    formData.append('UserName', this.Registration.get('UserName')?.value);
    formData.append('Email', this.Registration.get('Email')?.value);
    formData.append('Mobile', this.Registration.get('Mobile')?.value);
    formData.append('Dob', this.Registration.get('Dob')?.value);
    formData.append('Password', this.Registration.get('Password')?.value);
    formData.append('Address', this.Registration.get('Address')?.value);
    formData.append('Cast', this.Registration.get('Cast')?.value);
    formData.append('Sex', this.Registration.get('Sex')?.value);
    formData.append('Religious', this.Registration.get('Religious')?.value);
    formData.append('MartialStatus', this.Registration.get('MartialStatus')?.value);
    formData.append('MotherTongue', this.Registration.get('MotherTongue')?.value);
    formData.append('Height', this.Registration.get('Height')?.value);
    formData.append('Country', this.Registration.get('Country')?.value);
    formData.append('State', this.Registration.get('State')?.value);
    formData.append('City', this.Registration.get('City')?.value);
    formData.append('HighestEducation', this.Registration.get('HighestEducation')?.value);
    formData.append('Occupation', this.Registration.get('Occupation')?.value);
    formData.append('AnnualIncome', this.Registration.get('AnnualIncome')?.value);
    formData.append('ParentMobile', this.Registration.get('ParentMobile')?.value);
    formData.append('FamilyType', this.Registration.get('FamilyType')?.value);
    formData.append('FamilyStatus', this.Registration.get('FamilyStatus')?.value);
    formData.append('image', this.Registration.get('image')?.value);
    this.RegistrationService.Registration(formData).subscribe((res) =>
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

  HandleFile(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.Registration.patchValue({
        fileSource: file
      });
    }
  }

}
