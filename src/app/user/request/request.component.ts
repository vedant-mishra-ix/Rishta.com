import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RequestProfileService } from 'src/app/core/service/request-profile.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  id = localStorage.getItem("Id:");
  requestList: any = [];
  removeId: any;
  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9, 12];
  image:any;
  constructor(
    private requestService: RequestProfileService,
    private toastr: ToastrService,
    private route: Router)
    { }

  ngOnInit(): void {
    this.requestData();
  }
  requestData() {
    this.requestList = [];
    this.requestService.requestList(this.id).subscribe({
      next: (res) => {
        for (let i = 0; i < res.length; i++) {
          if (this.id == res[i].registeredId) {
            this.requestList.push(res[i]);
          }
        }
      }
    })
  }
  requestAccept(event: any) {
    this.removeId = event.requestId;
    let reqdata = { "requestId": this.id, "registeredId": event.requestId }
    this.requestService.requestAccept(reqdata).subscribe({
      next: (res) => {
        this.toastr.success("Request Accepted");
        this.removeAccept();
        this.route.navigate(['./user'])
      }, error: () => {}
    })
  }
  decline(event:any)
  {
    this.removeId = event.requestId;
    this.removeAccept();
  }
  removeAccept() {
    let ReqData = { "requestId": this.id, "registeredId": this.removeId }
    this.requestService.delete(ReqData).subscribe({
      next: (res) => {
        this.requestData();
      }
    })
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.requestData();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.requestData();
  }
  imageOpen(event:any)
  {
    this.image = event.requestImage;
  }
}