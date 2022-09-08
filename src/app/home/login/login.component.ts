import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { GuardService } from 'src/app/core/guard/guard.service';
import { Role } from 'src/app/core/model/role';
import { LoginService } from 'src/app/core/model/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Role = Role;
  UserName: any;
  loginProfile: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder, private LoginService: LoginService,
    private GuardService: GuardService, private route: Router,private toastr: ToastrService) {
    this.loginProfile = fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  login() {
    this.LoginService.LoginData(this.loginProfile.value).subscribe({
      next: (res) => {
        this.UserName = this.loginProfile.value.userName;
        localStorage.setItem('UserName:', this.UserName);
        this.GuardService.setToken(res.token);
        localStorage.setItem('role:', res.role);
        this.toastr.success("Successful Login")
        var GetRole = localStorage.getItem('role:');
        if (GetRole == "User") {
          this.route.navigate(['User']);
        }
        else {
          this.route.navigate(['Admin']);
        }
      }, error: () => {
        this.toastr.error("Something wrong");
      }
    });
  }
  get loginValidation() {
    return this.loginProfile.controls;
  }

  ngOnInit(): void {
  }

}
