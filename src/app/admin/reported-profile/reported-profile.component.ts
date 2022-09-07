import { Component, OnInit } from '@angular/core';
import { ReportedProfilesService } from 'src/app/core/model/admin-service/reported-profiles.service';

@Component({
  selector: 'app-reported-profile',
  templateUrl: './reported-profile.component.html',
  styleUrls: ['./reported-profile.component.css']
})
export class ReportedProfileComponent implements OnInit {

  ReportedList:any=[];
  constructor(private ReportedProfileService: ReportedProfilesService) { }

  ngOnInit(): void {
    this.ReportedProfileService.ReportedAccount().subscribe({
      next: (res) => {
        this.ReportedList =  res;
        console.log("Reported data1: "+ this.ReportedList[0].reportedId);
      }, error: () => {
        alert("something wrong");
      }
    })
  }

}
