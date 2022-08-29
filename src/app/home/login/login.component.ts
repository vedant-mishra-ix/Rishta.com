import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginProfile: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder)
  {
    this.loginProfile = fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
   }
   login()
   {
    console.log(this.loginProfile.value);
   }
  get loginValidation() {
    return this.loginProfile.controls;
  }

  ngOnInit(): void {
  }

}
