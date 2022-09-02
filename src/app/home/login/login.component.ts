import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
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
  loginProfile: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder, private LoginService: LoginService,
    private GuardService:GuardService,private route: Router) {
    this.loginProfile = fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  login() {
    this.LoginService.LoginData(this.loginProfile.value).subscribe({
      next: (res) => {
        alert("Login Succesfull:" + this.loginProfile.value.userName)
        this.GuardService.setToken(res.token);
        localStorage.setItem('role:',res.role);
        var GetRole = localStorage.getItem('role:');
       if(GetRole == "User")
       {
        this.route.navigate(['User']);
       }
       else
       {
        this.route.navigate(['Admin']);
       }
      }, error: () => {
        alert("Something Wrong:")
      }
    });
  }
  get loginValidation() {
    return this.loginProfile.controls;
  }

  ngOnInit(): void {
  }

}
