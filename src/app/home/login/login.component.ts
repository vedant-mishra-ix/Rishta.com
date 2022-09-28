import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Role } from 'src/app/core/model/role';
import { LoginService } from 'src/app/core/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  role = Role;
  userName: any;
  color = "FireBrick";
  submitted = false;
  loginProfile: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder, private loginService: LoginService,
    private guardService: AuthService, private route: Router, private toastr: ToastrService) {
    this.loginProfile = fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  login() {
    this.submitted = true;
    if (!this.loginProfile.invalid) {
      this.loginService.loginData(this.loginProfile.value).subscribe({
        next: (res) => {
          this.color = "ForestGreen";
          this.userName = this.loginProfile.value.userName;
          localStorage.setItem('UserName:', this.userName);
          this.guardService.setToken(res.token);
          localStorage.setItem('role:', res.role);
          this.toastr.success("Successful Login")
          var GetRole = localStorage.getItem('role:');
          if (GetRole == this.role.User) {
            this.route.navigate(['user']);
          }
          else {
            this.route.navigate(['admin']);
          }
        }, error: () => {
          this.toastr.error("Something wrong");
        }
      });
    }
  }
  get loginValidation() {
    return this.loginProfile.controls;
  }
  ngOnInit(): void {
  }

}
