import { Component, OnInit, ViewChild } from '@angular/core';
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
  Registered: any[] = [];
  Uservalue = localStorage.getItem('UserName:');
  Id: any;
  DelId: any;
  constructor(private RegisteredService: RegisteredService,
    private DeleteService: RegisteredDeleteService, private AdminProfile: AdminProfileService) { }

  ngOnInit(): void {
    this.AdminProfile.UserProfile(this.Uservalue ?? '').subscribe(
      {
        next: (res) => {
          this.Id = res.id;
          this.ProfileRegistered(res.id);
        }
      })
  }
  ProfileRegistered(Id: any) {
    this.RegisteredService.Registered(Id ?? '').subscribe({
      next: (res) => {
        this.Registered.length = 0;
        for (let i = 0; i < res.length; i++) {
          if (res[i].userName != 'pankaj') {
            this.Registered.push(res[i]);
          }
        }
      }
    })
  }
  Del(e: any) {
    if (e) {
      this.DeleteService.Delete(this.DelId ?? '').subscribe({
        next: (res) => {
          alert("Data deleted Succesful");
        }
      });
      this.ProfileRegistered(this.DelId);
    }
  }
  Delete(id: any) {
    this.alert.openPopup();
    this.DelId = id;
  }
}
