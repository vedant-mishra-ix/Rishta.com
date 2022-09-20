import { Component, OnInit, ViewChild } from '@angular/core';
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
<<<<<<< HEAD
  countryList:any=[];
  cityListContain: any = [];
  stateListContain:any=[];
=======
<<<<<<< HEAD
  countryList:any=[];
  cityListContain: any = [];
  stateListContain:any=[];
=======
  cityListContain: any = [];
>>>>>>> 97d6a5956686e7f34d963dc30b59020dab2d6a6c
>>>>>>> a51345ccd83c29617aa61a45094d47c0ce2d6ca7
  stateList: any = [];
  date: any;
  currentYear: number = 0;
  age: number = 0;
  Error = 'red';

  constructor(private fb: FormBuilder, private cityService: CityService,
    private stateService: StateService, private registrationService: RegistrationService,
    private route: Router, private toastr: ToastrService) {
    this.registration = this.fb.group({
      UserName: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
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
    })
  }
  submit() {
    if (this.age >= 18) {
      const formData: any = new FormData();
      formData.append('files', this.registration.get('fileSource')?.value);
      formData.append('UserName', this.registration.get('UserName')?.value);
      formData.append('Email', this.registration.get('Email')?.value);
      formData.append('Mobile', this.registration.get('Mobile')?.value);
<<<<<<< HEAD
      formData.append('DateOfBirth', this.registration.get('Dob')?.value);
=======
<<<<<<< HEAD
      formData.append('DateOfBirth', this.registration.get('Dob')?.value);
=======
<<<<<<< HEAD
      formData.append('DateOfBirth', this.registration.get('Dob')?.value);
=======
<<<<<<< HEAD
      formData.append('DateOfBirth', this.registration.get('Dob')?.value);
=======
<<<<<<< HEAD
      formData.append('DateOfBirth', this.registration.get('Dob')?.value);
=======
      formData.append('Dob', this.registration.get('Dob')?.value);
>>>>>>> 1a5366669bdaca024c8077996839e0d6ef746a42
>>>>>>> 76aef980cbfd3b732aa842473a19af63dabac739
>>>>>>> ecefed146e08f8c5d7c4f7dc2d4c85501ecaa656
>>>>>>> 97d6a5956686e7f34d963dc30b59020dab2d6a6c
>>>>>>> a51345ccd83c29617aa61a45094d47c0ce2d6ca7
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
<<<<<<< HEAD
      for (var pair of formData.entries()) {
        console.log("form data value::"+pair[0]+ ', ' + pair[1]);
    }
=======
<<<<<<< HEAD
      for (var pair of formData.entries()) {
        console.log("form data value::"+pair[0]+ ', ' + pair[1]);
    }
=======
<<<<<<< HEAD
      for (var pair of formData.entries()) {
        console.log("form data value::"+pair[0]+ ', ' + pair[1]);
    }
=======
<<<<<<< HEAD
      for (var pair of formData.entries()) {
        console.log("form data value::"+pair[0]+ ', ' + pair[1]);
    }
=======
<<<<<<< HEAD
      for (var pair of formData.entries()) {
        console.log("form data value::"+pair[0]+ ', ' + pair[1]);
    }
=======
>>>>>>> 1a5366669bdaca024c8077996839e0d6ef746a42
>>>>>>> 76aef980cbfd3b732aa842473a19af63dabac739
>>>>>>> ecefed146e08f8c5d7c4f7dc2d4c85501ecaa656
>>>>>>> 97d6a5956686e7f34d963dc30b59020dab2d6a6c
>>>>>>> a51345ccd83c29617aa61a45094d47c0ce2d6ca7
      this.registrationService.Registration(formData).subscribe((res) => {
        this.toastr.success("Successful Registration Done");
        this.route.navigate(['login']);
      }, error => { this.toastr.error("Something wrong or User Name Already exist! ") }
      )
    }
    else {
      this.toastr.error("Age must be 18 or greater than");
    }
  }
  get registrationValidation() {
    return this.registration.controls;
  }
  ngOnInit(): void {
    this.getCity();
    this.getState();
<<<<<<< HEAD
    this.getCountry();
=======
<<<<<<< HEAD
    this.getCountry();
=======
>>>>>>> 97d6a5956686e7f34d963dc30b59020dab2d6a6c
>>>>>>> a51345ccd83c29617aa61a45094d47c0ce2d6ca7
    this.date = new Date().toISOString().split('T')[0]
  }
  getCity() {
    this.cityService.getCityData().subscribe(res => {
      this.cityList = res;
    })
  }
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> a51345ccd83c29617aa61a45094d47c0ce2d6ca7
  getCountry()
  {
    this.stateService.getCountry().subscribe(res =>{
      this.countryList = res;
    })
  }
  getState() {
    this.stateService.getStateData().subscribe(res => {
      this.stateList = res;
    })
  }
  onSelectCountry(Country: any) {
    this.stateListContain = this.stateList.filter((e: any) => e.countryId == Country.target.value);
  }
  onSelect(State: any) {
    this.cityListContain = this.cityList.filter((e: any) => e.statesId == State.target.value);
  }
<<<<<<< HEAD
=======
=======
  getState() {
    this.stateService.getStateData().subscribe(res => {
      this.stateList = res;
    })
  }
  onSelect(State: any) {
<<<<<<< HEAD
    this.cityListContain = this.cityList.filter((e: any) => e.statesId == State.target.value);
=======
<<<<<<< HEAD
    this.cityListContain = this.cityList.filter((e: any) => e.statesId == State.target.value);
=======
<<<<<<< HEAD
    this.cityListContain = this.cityList.filter((e: any) => e.statesId == State.target.value);
=======
    this.cityListContain = this.cityList.filter((e: any) => e.id == State.target.value);
>>>>>>> 1a5366669bdaca024c8077996839e0d6ef746a42
>>>>>>> 76aef980cbfd3b732aa842473a19af63dabac739
>>>>>>> ecefed146e08f8c5d7c4f7dc2d4c85501ecaa656
  }
>>>>>>> 97d6a5956686e7f34d963dc30b59020dab2d6a6c
>>>>>>> a51345ccd83c29617aa61a45094d47c0ce2d6ca7
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
