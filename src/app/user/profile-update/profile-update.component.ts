import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FamilyStatus } from 'src/app/core/model/family-status';
import { FamilyType } from 'src/app/core/model/family-type';
import { Gender } from 'src/app/core/model/gender';
import { MarriageStatus } from 'src/app/core/model/marriage-status';
import { MotherTongue } from 'src/app/core/model/mother-tongue';
import { Religious } from 'src/app/core/model/religious';
import { CityService } from 'src/app/core/model/service/city.service';
import { ProfilUpdateService } from 'src/app/core/model/service/profil-update.service';
import { StateService } from 'src/app/core/model/service/state.service';
import { UserProfileService } from 'src/app/core/model/service/user-profile.service';

@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.component.html',
  styleUrls: ['./profile-update.component.css']
})
export class ProfileUpdateComponent implements OnInit {

  Gender = Gender;
  MarriageStatus = MarriageStatus;
  MotherTongue1 = MotherTongue;
  Religious1 = Religious;
  FamilyType1 = FamilyType;
  FamilyStatus1 = FamilyStatus;
  Registration: FormGroup = new FormGroup({});
  Files!: File;
  CityList: any = [];
  CityListContain: any = [];
  StateList: any = [];
  id: any;
  Id: any;
  Date:any;
  currentYear:number=0;
  age:number=0;
  constructor(private fb: FormBuilder, private cityService: CityService,
    private stateService: StateService,
    private Route: Router, private idRoute: ActivatedRoute, private ProfileService: UserProfileService,
    private UpdateService: ProfilUpdateService,private toastr: ToastrService) {
  }

  Uservalue = localStorage.getItem('UserName:');
  Submit() {
    if(this.age >= 18)
    {
    const formData: any = new FormData();
    formData.append('files', this.Registration.get('fileSource')?.value);
    formData.append('Id', this.Registration.get('Id')?.value);
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
    console.log(this.Registration.value);
    this.UpdateService.Update(formData).subscribe({
      next: (res) => {
        this.toastr.success("Profile Updated Successful");
        location.reload();
        this.Route.navigate(['./User']);
      }, error: () => {
        this.toastr.error("Something Wrong")
      }
    });
  }
  this.toastr.error("Age must be greater than 18");
  }

  get RegistrationValidation() {
    return this.Registration.controls;
  }

  ngOnInit(): void {
    this.Registration = this.fb.group({
      Id: [''],
      UserName: ['', Validators.required],
      Email: ['', Validators.required],
      Mobile: ['', Validators.required],
      Dob: ['', Validators.required],
      Password: ['', Validators.required],
      Address: ['', Validators.required],
      Cast: [''],
      Sex: ['', Validators.required],
      Religious: [''],
      MartialStatus: [''],
      MotherTongue: [''],
      Height: [''],
      Country: [''],
      State: [''],
      City: [''],
      HighestEducation: [''],
      Occupation: [''],
      AnnualIncome: [''],
      ParentMobile: [''],
      FamilyType: [''],
      FamilyStatus: [''],
      ProfilePhoto: [''],
      files: ['',Validators.required],
      fileSource: [''],
    });
    this.GetCity();
    this.GetState();
    this.id = this.idRoute.snapshot.paramMap.get('Id');
    this.ProfileService.UserProfile(this.Uservalue ?? '').subscribe(
      {
        next: (res) => {
          this.Registration.patchValue(
            {
              Id: res.id,
              UserName: res.userName,
              Email: res.email,
              Mobile: res.mobile,
              DateOfBirth: res.dateofBirth,
              CreatedDateTime: res.createdDateTime,
              ModifiedDateTime: res.modifiedDateTime,
              Password: res.password,
              Address: res.address,
              Cast: res.cast,
              Sex: res.sex,
              Religious: res.religious,
              MartialStatus: res.martialStatus,
              MotherTongue: res.motherTongue,
              Height: res.height,
              Country: res.country,
              State: res.state,
              City: res.city,
              HighestEducation: res.highestEducation,
              Occupation: res.occupation,
              AnnualIncome: res.annualIncome,
              ParentMobile: res.parentMobile,
              FamilyType: res.familyType,
              FamilyStatus: res.familyStatus,
              ProfilePhoto: res.profilePhoto
            }
          );
        }
      })
      this.Date = new Date().toISOString().split('T')[0]
  }

  GetCity() {
    this.cityService.GetCityData().subscribe(res => {
      this.CityList = res;
    })
  }
  GetState() {
    this.stateService.GetStateData().subscribe(res => {
      this.StateList = res;
    })
  }
  OnSelect(State: any) {
    this.CityListContain = this.CityList.filter((e: any) => e.id == State.target.value);
  }
  HandleFile(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.Registration.patchValue({
        fileSource: file
      });
    }
  }

  AgeCalculate() {
    let currentYear = new Date();
    let dob = new Date(this.Registration.value.Dob);
    let year = dob.getFullYear();
    let currentYearValue = currentYear.getFullYear()
    this.currentYear = currentYearValue;
    this.age = currentYearValue - year;
    console.log("Dob: "+ this.age);
  }
}
