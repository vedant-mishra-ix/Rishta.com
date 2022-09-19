import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminProfileService } from 'src/app/core/model/admin-service/admin-profile.service';
import { RegisteredDeleteService } from 'src/app/core/model/admin-service/registered-delete.service';
import { RegisteredService } from 'src/app/core/model/admin-service/registered.service';
import { Pagination } from 'src/app/core/model/pagination';
import { AlertBoxComponent } from 'src/app/share/component/alert-box/alert-box.component';

@Component({
  selector: 'app-registered',
  templateUrl: './registered.component.html',
  styleUrls: ['./registered.component.css']
})
export class RegisteredComponent implements OnInit {

  @ViewChild(AlertBoxComponent) alert!: AlertBoxComponent;
  registered: any[] = [];
  uservalue = localStorage.getItem('UserName:');
  id: any;
  deleteId: any;
<<<<<<< HEAD
  page: number = 1;
  count: number = 0;
  tableSize: number = 3;
  tableSizes: any = [3, 6, 9, 12];
  registeredCount: any;
  reponseCount: any;
  notificationCount: any;
=======
>>>>>>> ecefed146e08f8c5d7c4f7dc2d4c85501ecaa656
  constructor(private registeredService: RegisteredService,
    private deleteService: RegisteredDeleteService, private adminProfile: AdminProfileService
    , private toastr: ToastrService) { }

  ngOnInit(): void {
    this.adminProfile.userProfile(this.uservalue ?? '').subscribe(
      {
        next: (res) => {
          this.id = res.id;
          this.profileRegistered(res.id);
<<<<<<< HEAD
          this.registeredDataNotification(this.registeredCount, this.reponseCount);
=======
>>>>>>> ecefed146e08f8c5d7c4f7dc2d4c85501ecaa656
        }
      })
  }
  profileRegistered(Id: any) {
    this.registeredService.registered(Id ?? '').subscribe({
      next: (res) => {
        this.registered.length = 0;
        for (let i = 0; i < res.length; i++) {
          if (res[i].userName != 'pankaj') {
            this.registered.push(res[i]);
<<<<<<< HEAD
            this.registeredCount = this.registered.length;
            this.reponseCount = res.length;
=======
>>>>>>> ecefed146e08f8c5d7c4f7dc2d4c85501ecaa656
          }
        }
      }
    })
  }
<<<<<<< HEAD
  registeredDataNotification(counterFirst: any, counterSecond: any) {
    if (counterSecond == counterFirst) {
      this.notificationCount = 1;
    }
    else {
      this.notificationCount = 2;
      localStorage.setItem("RegisteredDataNotification:", this.notificationCount);
    }
  }
=======
>>>>>>> ecefed146e08f8c5d7c4f7dc2d4c85501ecaa656
  deletePopup(e: any) {
    if (e) {
      this.deleteService.delete(this.deleteId ?? '').subscribe({
        next: (res) => {
          this.toastr.success("Data Deleted Successfuly")
        }, error: () => { this.toastr.error("Something wrong") }
      })
      this.profileRegistered(this.deleteId);
    }
  }
  deleteData(id: any) {
    this.alert.openPopup();
    this.deleteId = id;
<<<<<<< HEAD
  }
  onTableDataChange(event: any) {
    this.page = event;
    this.profileRegistered(this.id);
  }
  onTableSizeChange(event: any): void {
    this.tableSize = event.target.value;
    this.page = 1;
    this.profileRegistered(this.id);
=======
>>>>>>> ecefed146e08f8c5d7c4f7dc2d4c85501ecaa656
  }
}
