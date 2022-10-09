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
import { CityService } from 'src/app/core/service/city.service';
import { ProfilUpdateService } from 'src/app/core/service/profil-update.service';
import { StateService } from 'src/app/core/service/state.service';
import { UserProfileService } from 'src/app/core/service/user-profile.service';
import { DatePipe } from '@angular/common'
import { map } from 'rxjs';
import { HttpEventType } from '@angular/common/http';

@Component({
  selector: 'app-profile-update',
  templateUrl: './profile-update.component.html',
  styleUrls: ['./profile-update.component.css']
})
export class ProfileUpdateComponent implements OnInit {

  gender = Gender;
  marriageStatus = MarriageStatus;
  motherTongue1 = MotherTongue;
  religious1 = Religious;
  familyType1 = FamilyType;
  familyStatus1 = FamilyStatus;
  registration: FormGroup = new FormGroup({});
  Files!: File;
  cityList: any = [];
  cityListContain: any = [];
  countryList: any = [];
  stateListContain: any = [];
  StateList: any = [];
  id: any;
  Id: any;
  date: any;
  currentYear: number = 0;
  age: number = 0;
  countryName: any;
  stateName: any;
  submitted = false;
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  profilePhoto = localStorage.getItem("ProfilePhoto:");
  progressValue = 0;
  constructor(
    private fb: FormBuilder,
    private cityService: CityService,
    private stateService: StateService,
    private route: Router,
    private idRoute: ActivatedRoute,
    private profileService: UserProfileService,
    private updateService: ProfilUpdateService,
    private toastr: ToastrService,
    public datepipe: DatePipe) { }
  uservalue = localStorage.getItem('UserName:');
  submit() {
    this.userProfile();
    this.registration.patchValue({
      Country: this.countryName,
      State: this.stateName
    });
    this.submitted = true;
    if (this.registration.valid) {
      if (this.age >= 18) {
        const formData: any = new FormData();
        formData.append('files', this.registration.get('fileSource')?.value);
        formData.append('Id', this.registration.get('Id')?.value);
        formData.append('UserName', this.registration.get('UserName')?.value);
        formData.append('Email', this.registration.get('Email')?.value);
        formData.append('Mobile', this.registration.get('Mobile')?.value);
        formData.append('DateOfBirth', this.registration.get('Dob')?.value);
        formData.append('Password', this.registration.get('Password')?.value);
        formData.append('Address', this.registration.get('Address')?.value);
        formData.append('Cast', this.registration.get('Cast')?.value);
        formData.append('Sex', this.registration.get('Sex')?.value);
        formData.append('Religious', this.registration.get('Religious')?.value);
        formData.append('MartialStatus', this.registration.get('MartialStatus')?.value);
        formData.append('MotherTongue', this.registration.get('MotherTongue')?.value);
        formData.append('Height', this.registration.get('Height')?.value);
        formData.append('Country', this.registration.get('Country')?.value);
        formData.append('State', this.registration.get('State')?.value);
        formData.append('City', this.registration.get('City')?.value);
        formData.append('HighestEducation', this.registration.get('HighestEducation')?.value);
        formData.append('Occupation', this.registration.get('Occupation')?.value);
        formData.append('AnnualIncome', this.registration.get('AnnualIncome')?.value);
        formData.append('ParentMobile', this.registration.get('ParentMobile')?.value);
        formData.append('FamilyType', this.registration.get('FamilyType')?.value);
        formData.append('FamilyStatus', this.registration.get('FamilyStatus')?.value);
        formData.append('image', this.registration.get('image')?.value);
        this.updateService.update(formData).
          pipe(
            map(events => {
              switch (events.type) {
                case HttpEventType.UploadProgress:
                  this.progressValue = Math.round(events.loaded / events.total! * 100);
                  break;
                case HttpEventType.Response:
                  this.toastr.success("Profile Updated Successful");
                  setTimeout(() => {
                    this.progressValue = 0;
                  }, 3000);
                  location.reload();
                  break;
              }
            }
            )
          )
          .subscribe({
            next: (res) => {
            }, error: () => {
              this.toastr.error("Something Wrong")
            }
          });
      }
      else {
        this.toastr.error("Age must be greater than 18");
      }
    }
    else {
      return;
    }
  }
  get registrationValidation() {
    return this.registration.controls;
  }
  ngOnInit(): void {
    this.userProfile();
    this.registration = this.fb.group({
      Id: [''],
      UserName: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email, Validators.pattern(this.emailPattern)]],
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
      files: ['', Validators.required],
      fileSource: [''],
    });
    this.getCity();
    this.getState();
    this.getCountry();
    this.id = this.idRoute.snapshot.paramMap.get('id');
    this.date = new Date().toISOString().split('T')[0]
  }
  userProfile() {
    this.profileService.userProfile(this.uservalue ?? '').subscribe(
      {
        next: (res) => {
          this.registration.patchValue(
            {
              Id: res.id,
              UserName: res.userName,
              Email: res.email,
              Mobile: res.mobile,
              Dob: this.datepipe.transform(res.dateOfBirth, 'yyyy-MM-dd'),
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
              files: res.profilePhoto
            }
          );
        }
      })
  }
  getCountry() {
    this.stateService.getCountry().subscribe(res => {
      this.countryList = res;
    })
  }
  getCity() {
    this.cityService.getCityData().subscribe(res => {
      this.cityList = res;
    })
  }
  getState() {
    this.stateService.getStateData().subscribe(res => {
      this.StateList = res;
    })
  }
  onSelectCountry(country: any) {
    this.stateListContain = this.StateList.filter((e: any) => e.countryId == country.target.value);
    let countryName = this.countryList.filter((e: any) => e.id == country.target.value);
    this.countryName = countryName[0].countries;
  }
  onSelect(state: any) {
    this.cityListContain = this.cityList.filter((e: any) => e.statesId == state.target.value);
    let stateName = this.stateListContain.filter((e: any) => e.id == state.target.value);
    this.stateName = stateName[0].states;
  }
  handleFile(event: any) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.registration.patchValue({
        fileSource: file
      });
    }
  }
  ageCalculate() {
    let currentYear = new Date();
    let dob = new Date(this.registration.value.Dob);
    let year = dob.getFullYear();
    let currentYearValue = currentYear.getFullYear()
    this.currentYear = currentYearValue;
    this.age = currentYearValue - year;
    console.log("Age: " + this.age);

  }
}
