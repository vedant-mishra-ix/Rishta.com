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

  role = Role;
  userName: any;
<<<<<<< HEAD
  color="FireBrick"
=======
<<<<<<< HEAD
  color="FireBrick"
=======
<<<<<<< HEAD
  color="FireBrick"
=======
>>>>>>> 1a5366669bdaca024c8077996839e0d6ef746a42
>>>>>>> 76aef980cbfd3b732aa842473a19af63dabac739
>>>>>>> ecefed146e08f8c5d7c4f7dc2d4c85501ecaa656
  loginProfile: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder, private loginService: LoginService,
    private guardService: GuardService, private route: Router,private toastr: ToastrService) {
    this.loginProfile = fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  login() {
    this.loginService.loginData(this.loginProfile.value).subscribe({
      next: (res) => {
<<<<<<< HEAD
        this.color = "ForestGreen";
=======
<<<<<<< HEAD
        this.color = "ForestGreen";
=======
<<<<<<< HEAD
        this.color = "ForestGreen";
=======
>>>>>>> 1a5366669bdaca024c8077996839e0d6ef746a42
>>>>>>> 76aef980cbfd3b732aa842473a19af63dabac739
>>>>>>> ecefed146e08f8c5d7c4f7dc2d4c85501ecaa656
        this.userName = this.loginProfile.value.userName;
        localStorage.setItem('UserName:', this.userName);
        this.guardService.setToken(res.token);
        localStorage.setItem('role:', res.role);
        this.toastr.success("Successful Login")
        var GetRole = localStorage.getItem('role:');
        if (GetRole == this.role.User) {
          this.route.navigate(['User']);
        }
        else{
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
