import { Component, OnInit } from '@angular/core';
import { ReportedProfilesService } from 'src/app/core/model/admin-service/reported-profiles.service';

@Component({
  selector: 'app-reported-profile',
  templateUrl: './reported-profile.component.html',
  styleUrls: ['./reported-profile.component.css']
})
export class ReportedProfileComponent implements OnInit {

  reportedList:any=[];
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 97d6a5956686e7f34d963dc30b59020dab2d6a6c
  page:number=1;
  count:number=0;
  tableSize:number=3;
  tableSizes:any=[3,6,9,12];
<<<<<<< HEAD
=======
=======
>>>>>>> ecefed146e08f8c5d7c4f7dc2d4c85501ecaa656
>>>>>>> 97d6a5956686e7f34d963dc30b59020dab2d6a6c
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
