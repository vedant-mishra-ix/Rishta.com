import { Component, OnInit } from '@angular/core';
import { ReportedProfilesService } from 'src/app/core/model/admin-service/reported-profiles.service';

@Component({
  selector: 'app-reported-profile',
  templateUrl: './reported-profile.component.html',
  styleUrls: ['./reported-profile.component.css']
})
export class ReportedProfileComponent implements OnInit {

  reportedList:any=[];
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

}
