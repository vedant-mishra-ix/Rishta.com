import { Component, OnInit } from '@angular/core';
import { ReportedProfilesService } from 'src/app/core/model/admin-service/reported-profiles.service';

@Component({
  selector: 'app-reported-profile',
  templateUrl: './reported-profile.component.html',
  styleUrls: ['./reported-profile.component.css']
})
export class ReportedProfileComponent implements OnInit {

  reportedList:any=[];
  page:number=1;
  count:number=0;
  tableSize:number=3;
  tableSizes:any=[3,6,9,12];
  constructor(private ReportedProfileService: ReportedProfilesService) { }

  ngOnInit(): void {
    this.reportedProfile();
  }
  reportedProfile()
  {
    this.ReportedProfileService.reportedAccount().subscribe({
      next: (res) => {
        this.reportedList =  res;
      }, error: () => {
        alert("something wrong");
      }
    })
  }
  onTableDataChange(event:any)
  {
    this.page = event;
    this.reportedProfile();
  }
  onTableSizeChange(event:any):void
  {
    this.tableSize = event.target.value;
    this.page = 1;
    this.reportedProfile();
  }
}
