import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ReportProfileService } from 'src/app/core/model/service/report-profile.service';
import { UserListService } from 'src/app/core/model/service/user-list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  UserList:any[]=[];
  Id = localStorage.getItem("Id:");
  constructor(private UserListService:UserListService,private route:Router,
    private ReportService:ReportProfileService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.GetData();
  }

  GetData()
  {
    this.UserListService.Registered(this.Id).subscribe({next:(res)=>
      {
        for(let i = 0 ; i < res.length ; i++ )
        {
          if(res[i].userName != 'pankaj')
          {
            this.UserList.push(res[i]);
          }
        }
      }})
  }
  UserProfile(Data:any)
  {
    localStorage.setItem("UserSpecific:",Data.userName);
    localStorage.setItem("UserSpecific1:",Data.email);
    localStorage.setItem("UserSpecific2:",Data.mobile);
    localStorage.setItem("UserSpecific3:",Data.address);
    localStorage.setItem("UserSpecific4:",Data.profilePhoto);
    this.route.navigate(['./User/specific']);
  }
  ProfileReport(event:any)
  {
    this.ReportService.ReportProfile(event.id).subscribe({next:(res)=>
    {
      this.toastr.success("Profile Reported Successfuly")
    },error:()=> {this.toastr.error("Something wrong")}})
  }
}
