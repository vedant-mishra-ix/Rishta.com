import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { AdminProfileService } from 'src/app/core/model/admin-service/admin-profile.service';
import { RegisteredDeleteService } from 'src/app/core/model/admin-service/registered-delete.service';
import { RegisteredService } from 'src/app/core/model/admin-service/registered.service';
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
  constructor(private registeredService: RegisteredService,
    private deleteService: RegisteredDeleteService, private adminProfile: AdminProfileService
    , private toastr: ToastrService) { }

  ngOnInit(): void {
    this.adminProfile.userProfile(this.uservalue ?? '').subscribe(
      {
        next: (res) => {
          this.id = res.id;
          this.profileRegistered(res.id);
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
          }
        }
      }
    })
  }
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
  }
}
