import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { FamilyType } from 'src/app/core/model/family-type';
import { Gender } from 'src/app/core/model/gender';
import { MarriageStatus } from 'src/app/core/model/marriage-status';
import { FamilyTypeService } from 'src/app/core/model/service/family-type.service';
import { GenderListService } from 'src/app/core/model/service/gender-list.service';
import { MartialStatusService } from 'src/app/core/model/service/martial-status.service';

@Component({
  selector: 'app-matched',
  templateUrl: './matched.component.html',
  styleUrls: ['./matched.component.css']
})
export class MatchedComponent implements OnInit {

  gender = Gender;
  martialStatus = MarriageStatus;
  familyType = FamilyType;
  genderBasedList: any[] = [];
  martialBasedList: any[] = [];
  familyBasedList: any[] = [];
  dependentBasedList: any[] = [];
  sex: any;
  martial: any;
  family: any;
  userName: any;
  genderList: FormGroup = new FormGroup({});
  constructor(private genderService: GenderListService, private fb: FormBuilder,
    private martialService: MartialStatusService, private familyTypeService: FamilyTypeService) {
    this.genderList = this.fb.group({
      Sex: [''],
      MartialStatus: [''],
      FamilyType: [''],
    })
  }
  genderData(event: any) {
    this.dependentBasedList = [];
    this.sex = event;
    this.userName = localStorage.getItem("UserName:");
    this.genderService.gender(this.sex).subscribe({
      next: (res) => {
        this.genderBasedList.length = 0;
        this.familyBasedList.length = 0;
        this.martialBasedList.length = 0;
        for (let i = 0; i < res.length; i++) {
          if (res[i].userName != 'pankaj' && res[i].userName != this.userName) {
            this.genderBasedList.push(res[i]);
          }
        }
      }
    })
  }
  martialStatusData(event: any) {
    this.dependentBasedList = [];
    this.martial = event;
    this.userName = localStorage.getItem("UserName:");
    this.martialService.martial(this.martial).subscribe({
      next: (res) => {
        this.martialBasedList.length = 0;
        this.genderBasedList.length = 0;
        this.familyBasedList.length = 0;
        for (let i = 0; i < res.length; i++) {
          if (res[i].userName != 'pankaj' && res[i].userName != this.userName) {
            this.martialBasedList.push(res[i]);
          }
        }
      }
    })
  }
  familyTypeData(event: any) {
    this.dependentBasedList = [];
    this.family = event;
    this.userName = localStorage.getItem("UserName:");
    this.familyTypeService.familyType(this.family).subscribe({
      next: (res) => {
        this.martialBasedList.length = 0;
        this.genderBasedList.length = 0;
        this.familyBasedList.length = 0;
        for (let i = 0; i < res.length; i++) {
          if (res[i].userName != 'pankaj' && res[i].userName != this.userName) {
            this.familyBasedList.push(res[i]);
          }
        }
      }
    })
  }
  dependentFilter() {
    this.familyBasedList = [];
    this.userName = localStorage.getItem("UserName:");
    this.dependentBasedList.length = 0;
    this.genderService.gender(this.sex).subscribe({
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
    this.genderBasedList.length = 0;
    this.familyBasedList.length = 0;
    this.martialBasedList.length = 0;
    this.dependentBasedList.length = 0
  }
  ngOnInit(): void {
  }
}
