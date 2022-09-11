import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { RequestProfileService } from 'src/app/core/model/service/request-profile.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  Id = localStorage.getItem("Id:");
  RequestList:any=[];
  Notification:any=0;
  constructor(private RequestService : RequestProfileService,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.RequestData();
  }

  RequestData()
  {
    this.RequestService.RequestList(this.Id).subscribe({next:(res)=>
      {
        for(let i = 0 ; i < res.length ; i++)
        {
          if(this.Id == res[i].registeredId)
          {
            this.RequestList.push(res[i]);
            this.toastr.success("You have Received Request")
          }
        }
      }})
  }
}
