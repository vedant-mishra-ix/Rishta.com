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

  Gender = Gender;
  MartialStatus = MarriageStatus;
  FamilyType = FamilyType;
  GenderBasedList: any[] = [];
  MartialBasedList: any[] = [];
  FamilyBasedList: any[] = [];
  DependentBasedList: any[] = [];
  Sex: any;
  Martial: any;
  Family: any;
  UserName: any;
  GenderList: FormGroup = new FormGroup({});
  constructor(private GenderService: GenderListService, private fb: FormBuilder,
    private MartialService: MartialStatusService, private FamilyTypeService: FamilyTypeService) {
    this.GenderList = this.fb.group({
      Sex: [''],
      MartialStatus: [''],
      FamilyType: [''],
    })
  }
  GenderData(event: any) {
    this.DependentBasedList =[];
    this.Sex = event;
    this.UserName = localStorage.getItem("UserName:");
    this.GenderService.Gender(this.Sex).subscribe({
      next: (res) => {
        this.GenderBasedList.length = 0;
        this.FamilyBasedList.length = 0;
        this.MartialBasedList.length = 0;
        for (let i = 0; i < res.length; i++) {
          if (res[i].userName != 'pankaj' && res[i].userName != this.UserName) {
            this.GenderBasedList.push(res[i]);
          }
        }
      }
    })
  }
  MartialStatusData(event: any) {
    this.DependentBasedList =[];
    this.Martial = event;
    this.UserName = localStorage.getItem("UserName:");
    this.MartialService.Martial(this.Martial).subscribe({
      next: (res) => {
        this.MartialBasedList.length = 0;
        this.GenderBasedList.length = 0;
        this.FamilyBasedList.length =0;
        for (let i = 0; i < res.length; i++) {
          if (res[i].userName != 'pankaj' && res[i].userName != this.UserName) {
            this.MartialBasedList.push(res[i]);
          }
        }
      }
    })
  }
  FamilyTypeData(event: any) {
    this.DependentBasedList =[];
    this.Family = event;
    this.UserName = localStorage.getItem("UserName:");
    this.FamilyTypeService.FamilyType(this.Family).subscribe({
      next: (res) => {
        this.MartialBasedList.length = 0;
        this.GenderBasedList.length = 0;
        this.FamilyBasedList.length = 0;
        for (let i = 0; i < res.length; i++) {
          if (res[i].userName != 'pankaj' && res[i].userName != this.UserName) {
            this.FamilyBasedList.push(res[i]);
          }
        }
      }
    })
  }

  DependentFilter() {
    this.FamilyBasedList = [];
    this.UserName = localStorage.getItem("UserName:");
    this.DependentBasedList.length =0;
    this.GenderService.Gender(this.Sex).subscribe({next:(res)=>
    {
      for(let i = 0 ; i < res.length ; i++)
      {
        if((res[i].sex == this.Sex && res[i].martialStatus == this.Martial)&&
          res[i].familyType == this.Family)
          {
            this.DependentBasedList.push(res[i]);
            console.log("Depnde:  "+ this.DependentBasedList);
          }
      }
    }})
  }
  ResetAll()
  {
    this.GenderBasedList.length = 0;
    this.FamilyBasedList.length = 0;
    this.MartialBasedList.length = 0;
    this.DependentBasedList.length = 0
  }
  ngOnInit(): void {
  }


}
