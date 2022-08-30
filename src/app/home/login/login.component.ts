import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from 'src/app/core/model/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginProfile: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder, private LoginService: LoginService) {
    this.loginProfile = fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  login() {
    this.LoginService.LoginData(this.loginProfile.value).subscribe({
      next: (res) => {
        alert("Login Succesfull:" + this.loginProfile.value.userName)
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
