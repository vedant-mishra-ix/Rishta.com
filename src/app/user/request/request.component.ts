import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { RequestProfileService } from 'src/app/core/model/service/request-profile.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {

  id = localStorage.getItem("Id:");
  requestList: any = [];
  removeId: any;
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> a51345ccd83c29617aa61a45094d47c0ce2d6ca7
  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9, 12];
  notificationCount: any;
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
  page:number=1;
  count:number=0;
  tableSize:number=3;
  tableSizes:any=[3,6,9,12];
  notificationCount:any;
=======
>>>>>>> ecefed146e08f8c5d7c4f7dc2d4c85501ecaa656
>>>>>>> 97d6a5956686e7f34d963dc30b59020dab2d6a6c
>>>>>>> a51345ccd83c29617aa61a45094d47c0ce2d6ca7
  constructor(private requestService: RequestProfileService, private toastr: ToastrService,
    private route: Router) { }

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
<<<<<<< HEAD
            this.notificationCount = this.requestList.length;
            localStorage.setItem("RequestGet:", this.notificationCount);
=======
<<<<<<< HEAD
            this.notificationCount = this.requestList.length;
            localStorage.setItem("RequestGet:", this.notificationCount);
=======
<<<<<<< HEAD
            this.notificationCount = this.requestList.length;
            localStorage.setItem("RequestGet:",this.notificationCount);
=======
>>>>>>> ecefed146e08f8c5d7c4f7dc2d4c85501ecaa656
>>>>>>> 97d6a5956686e7f34d963dc30b59020dab2d6a6c
>>>>>>> a51345ccd83c29617aa61a45094d47c0ce2d6ca7
            this.toastr.success("You have Received Request")
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
        this.route.navigate(['./User'])
      }, error: () => { this.toastr.error("Something wrong") }
    })
  }
<<<<<<< HEAD
  removeAccept() {
    let ReqData = { "requestId": this.id, "registeredId": this.removeId }
=======
<<<<<<< HEAD
  removeAccept() {
    let ReqData = { "requestId": this.id, "registeredId": this.removeId }
=======

  removeAccept() {
    let ReqData = { "requestId": this.id, "registeredId":this.removeId }
>>>>>>> 97d6a5956686e7f34d963dc30b59020dab2d6a6c
>>>>>>> a51345ccd83c29617aa61a45094d47c0ce2d6ca7
    this.requestService.delete(ReqData).subscribe({
      next: (res) => {
        this.requestData();
      }
    })
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> a51345ccd83c29617aa61a45094d47c0ce2d6ca7
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.requestData();
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.requestData();
<<<<<<< HEAD
=======
=======
<<<<<<< HEAD
  }
  onTableDataChange(event:any)
  {
    this.page = event;
    this.requestData();
  }
  onTableSizeChange(event:any):void
  {
    this.tableSize = event.target.value;
    this.page = 1;
    this.requestData();
=======
>>>>>>> ecefed146e08f8c5d7c4f7dc2d4c85501ecaa656
>>>>>>> 97d6a5956686e7f34d963dc30b59020dab2d6a6c
>>>>>>> a51345ccd83c29617aa61a45094d47c0ce2d6ca7
  }
}
