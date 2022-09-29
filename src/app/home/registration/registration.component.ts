import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FamilyStatus } from 'src/app/core/model/family-status';
import { FamilyType } from 'src/app/core/model/family-type';
import { Gender } from 'src/app/core/model/gender';
import { MarriageStatus } from 'src/app/core/model/marriage-status';
import { MotherTongue } from 'src/app/core/model/mother-tongue';
import { Religious } from 'src/app/core/model/religious';
import { CityService } from 'src/app/core/service/city.service';
import { RegistrationService } from 'src/app/core/service/registration.service';
import { StateService } from 'src/app/core/service/state.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  gender = Gender;
  marriageStatus = MarriageStatus;
  motherTongue = MotherTongue;
  religious = Religious;
  familyType = FamilyType;
  familyStatus = FamilyStatus;
  registration: FormGroup = new FormGroup({});
  Files!: File;
  cityList: any = [];
  countryList: any = [];
  cityListContain: any = [];
  stateListContain: any = [];
  stateList: any = [];
  date: any;
  currentYear: number = 0;
  age: number = 0;
  Error = 'red';
  countryName: any;
  stateName: any;
  submitted = false;
  passwordRegex = "^(?=.*[0-9])"
           + "(?=.*[a-z])(?=.*[A-Z])"
           + "(?=.*[@#$%^&+=])"
           + "(?=\\S+$).{8,20}$";
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";

  constructor(
    private fb: FormBuilder,
    private cityService: CityService,
    private stateService: StateService,
    private registrationService: RegistrationService,
    private route: Router,
    private toastr: ToastrService)
    {
    this.registration = this.fb.group({
      UserName: ['', Validators.required],
      Email: ['', [Validators.required,Validators.email,Validators.pattern(this.emailPattern)]],
      Mobile: ['', Validators.required],
      Dob: ['', Validators.required],
      Password: ['', [Validators.required,Validators.pattern(this.passwordRegex)]],
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
    })
  }
  submit() {
    this.registration.patchValue({
      Country: this.countryName,
      State: this.stateName
    });
    this.submitted = true;
    if (!this.registration.invalid) {
      if (this.age >= 18) {
        const formData: any = new FormData();
        formData.append('files', this.registration.get('fileSource')?.value);
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
        this.registrationService.Registration(formData).subscribe((res) => {
          this.toastr.success("Successful Registration Done");
          this.route.navigate(['login']);
        }, error => { this.toastr.error("Email Already exist! ") }
        )
      }
      else {
        this.toastr.error("Age must be 18 or greater than");
      }
    }
    else{
      return;
    }
  }
  get registrationValidation(){
    return this.registration.controls;
  }
  ngOnInit(): void {
    this.getCity();
    this.getState();
    this.getCountry();
    this.date = new Date().toISOString().split('T')[0]
  }
  getCity() {
    this.cityService.getCityData().subscribe(res => {
      this.cityList = res;
    })
  }
  getCountry() {
    this.stateService.getCountry().subscribe(res => {
      this.countryList = res;
    })
  }
  getState() {
    this.stateService.getStateData().subscribe(res => {
      this.stateList = res;
    })
  }
  onSelectCountry(country: any) {
    this.stateListContain = this.stateList.filter((e: any) => e.countryId == country.target.value);
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
  }
}
