import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ReportProfileService } from 'src/app/core/model/service/report-profile.service';
import { RequestHistoryService } from 'src/app/core/model/service/request-history.service';
import { RequestProfileService } from 'src/app/core/model/service/request-profile.service';
import { UserListService } from 'src/app/core/model/service/user-list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  userList: any = [];
  id = localStorage.getItem("Id:");
  historyList: any = [];
  count: number = 0;
  ProfileCount = localStorage.getItem("ProfileVisible:");
  constructor(private userListService: UserListService, private route: Router,
    private reportService: ReportProfileService, private toastr: ToastrService,
    private requestService: RequestProfileService, private historyService: RequestHistoryService
    ) { }

  ngOnInit(): void {
    this.getData();
    this.history();
  }
  getData() {
    this.userList.length=0;
    this.userListService.registered(this.id).subscribe({
      next: (res) => {
        for (let i = 0; i < res.length; i++) {
          if (res[i].userName != 'pankaj') {
            this.userList.push(res[i]);
          }
        }
      }
    })
  }
  userProfile(Data: any) {
    localStorage.setItem("UserSpecific:", Data.userName);
    localStorage.setItem("UserSpecific1:", Data.email);
    localStorage.setItem("UserSpecific2:", Data.mobile);
    localStorage.setItem("UserSpecific3:", Data.address);
    localStorage.setItem("UserSpecific4:", Data.profilePhoto);
    this.route.navigate(['./user/specific']);
  }
  profileReport(event: any) {
    this.reportService.reportProfile(event.id).subscribe({
      next: (res) => {
        this.toastr.success("Profile Reported Successfuly")
      }, error: () => { this.toastr.error("Something wrong") }
    })
  }
  requestSend(event: any) {
    let reqdata = { "requestId": this.id, "registeredId": event.id }
    for (let i = 0; i < this.historyList.length; i++) {
      this.history();
      if (this.historyList[i].requestId == event.id) {
        this.count++;
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
    else {
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
