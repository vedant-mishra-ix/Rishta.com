import { Component, OnInit } from '@angular/core';
import { ReportedProfilesService } from 'src/app/core/admin-service/reported-profiles.service';

@Component({
  selector: 'app-reported-profile',
  templateUrl: './reported-profile.component.html',
  styleUrls: ['./reported-profile.component.css']
})
export class ReportedProfileComponent implements OnInit {

  reportedList:any=[];
  page:number=1;
  count:any;
  tableSize:number=3;
  image:any;
  constructor(private ReportedProfileService: ReportedProfilesService) { }

  ngOnInit(): void {
    this.reportedProfile();
  }
  reportedProfile()
  {
    this.ReportedProfileService.reportedAccount(this.page,this.tableSize).subscribe({
      next: (res) => {
        this.reportedList =  res;
        console.log("data about data: "+ res);

      }, error: () => {
        alert("something wrong");
      }
    })
    this.dataCount();
  }
  dataCount()
  {
    this.ReportedProfileService.reportedAccount().subscribe({
      next: (res) => {
        this.count = res.length;
        console.log("size table: "+ this.count);
      }
    })
  }
  onTableDataChange(event:any)
  {
    this.page = event;
    this.reportedProfile();
  }
  imageOpen(event:any)
  {
    this.image = event.reportedImage;
  }
}
