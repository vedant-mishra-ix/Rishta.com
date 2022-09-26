import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { FamilyType } from 'src/app/core/model/family-type';
import { Gender } from 'src/app/core/model/gender';
import { MarriageStatus } from 'src/app/core/model/marriage-status';
import { FamilyTypeService } from 'src/app/core/model/service/family-type.service';
import { GenderListService } from 'src/app/core/model/service/gender-list.service';
import { MartialStatusService } from 'src/app/core/model/service/martial-status.service';
import { RegisteredService } from 'src/app/core/model/service/registered.service';

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
  registeredList: any[]=[];
  sex: any;
  martial: any;
  family: any;
  userName: any;
  hidden=false;
  genderList: FormGroup = new FormGroup({});
  username = localStorage.getItem("UserName:");
  constructor(private genderService: GenderListService, private fb: FormBuilder,
    private martialService: MartialStatusService, private familyTypeService: FamilyTypeService,
    private registeredService:RegisteredService) {
    this.genderList = this.fb.group({
      Sex: [''],
      MartialStatus: [''],
      FamilyType: [''],
    })
  }
  registeredAccounts()
  {
    this.registeredService.registered().subscribe({
      next:(res)=>
      {
        for(let i = 0 ; i < res.length ; i++)
        {
          if(res[i].userName != 'pankaj' && res[i].userName != this.username && res[i].userName != 'Dheeru')
          {
            this.registeredList.push(res[i]);
          }
        }
      }
    })
  }
  genderData(event: any) {
    this.hidden = true;
    this.dependentBasedList = [];
    this.sex = event;
    this.userName = localStorage.getItem("UserName:");
    this.genderService.gender(this.sex).subscribe({
      next: (res) => {
        this.genderBasedList.length = 0;
        this.familyBasedList.length = 0;
        this.martialBasedList.length = 0;
        for (let i = 0; i < res.length; i++) {
          if (res[i].userName != 'pankaj' && res[i].userName != this.userName && res[i].userName != 'Dheeru') {
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
        this.registeredList.length = 0;
        for (let i = 0; i < res.length; i++) {
          if (res[i].userName != 'pankaj' && res[i].userName != this.userName && res[i].userName != 'Dheeru') {
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
        this.registeredList.length = 0;
        for (let i = 0; i < res.length; i++) {
          if (res[i].userName != 'pankaj' && res[i].userName != this.userName && res[i].userName != 'Dheeru') {
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
          if ((res[i].sex == this.sex && res[i].martialStatus == this.martial && res[i].userName != 'Dheeru') &&
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
    this.registeredAccounts();
    this.dependentBasedList.length = 0;
    this.hidden = false;
  }
  ngOnInit(): void {
    this.registeredAccounts();
  }

}
