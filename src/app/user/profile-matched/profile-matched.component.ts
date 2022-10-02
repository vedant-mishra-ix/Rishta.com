import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { RequestHistoryService } from 'src/app/core/service/request-history.service';
import { RequestProfileService } from 'src/app/core/service/request-profile.service';
import { UserListService } from 'src/app/core/service/user-list.service';

@Component({
  selector: 'app-profile-matched',
  templateUrl: './profile-matched.component.html',
  styleUrls: ['./profile-matched.component.css']
})
export class ProfileMatchedComponent implements OnInit {

  id = localStorage.getItem("Id:");
  city = localStorage.getItem("City:");
  gender = localStorage.getItem("Gender:");
  userList: any = [];
  page:number=1;
  count:number=0;
  tableSize:number=3;
  tableSizes:any=[3,6,9,12];
  historyList: any = [];
  image:any
  constructor(
    private userListService: UserListService,
    private requestService: RequestProfileService,
    private historyService: RequestHistoryService,
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getData();
    this.history();
  }
  getData() {
    this.userListService.registered(this.id).subscribe({
      next: (res) => {
        for (let i = 0; i < res.length; i++) {
          if ( res[i].city == this.city && res[i].sex != this.gender) {
            this.userList.push(res[i]);
          }
        }
      }
    })
  }
  onTableDataChange(event:any)
  {
    this.page = event;
    this.getData();
  }
  onTableSizeChange(event:any):void
  {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getData();
  }
  imageOpen(event:any)
  {
    this.image = event.profilePhoto;
  }
  requestSend(event: any) {
    let reqdata = { "requestId": this.id, "registeredId": event.id }
    for (let i = 0; i < this.historyList.length; i++) {
      this.history();
      if (this.historyList[i].requestId == event.id) {
        this.count = 1;
        break
      }
    }
    if (this.count < 1) {
      this.requestService.request(reqdata).subscribe({
        next: (res) => {
          this.toastr.success("Request send succesfuly");
        }
      })
    }
    else if( this.count == 1){
      this.toastr.error("you already sent the request");
    }
  }
  history() {
    this.historyService.history(this.id).subscribe({
      next: (res) => {
        for (let i = 0; i < res.length; i++) {
          if (this.id == res[i].registeredId) {
            this.historyList.push(res[i]);
          }
        }
      }
    })
  }
}
