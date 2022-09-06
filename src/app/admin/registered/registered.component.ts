import { Component, OnInit } from '@angular/core';
import { AdminProfileService } from 'src/app/core/model/admin-service/admin-profile.service';
import { RegisteredDeleteService } from 'src/app/core/model/admin-service/registered-delete.service';
import { RegisteredService } from 'src/app/core/model/admin-service/registered.service';

@Component({
  selector: 'app-registered',
  templateUrl: './registered.component.html',
  styleUrls: ['./registered.component.css']
})
export class RegisteredComponent implements OnInit {

  Registered: any[] = [];
  Uservalue = localStorage.getItem('UserName:');
  Id: any;
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
        for (let i = 0; i < res.length; i++) {
          if (res[i].userName != 'pankaj') {
            this.Registered.push(res[i]);
          }
        }
      }
    })
  }
  Delete(id: any) {
    this.DeleteService.Delete(id ?? '').subscribe({
      next: (res) => {
        alert("Data deleted Succesful");
      }
    });
    this.ProfileRegistered(id);
  }
}
