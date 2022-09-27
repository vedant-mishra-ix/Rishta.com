import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ForgotService } from 'src/app/core/service/forgot.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  passwordRegex = "^(?=.*[0-9])"
  + "(?=.*[a-z])(?=.*[A-Z])"
  + "(?=.*[@#$%^&+=])"
  + "(?=\\S+$).{8,20}$";
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  resetPassword: FormGroup = new FormGroup({});
  submitted = false;
  constructor(private fb: FormBuilder, private toaster: ToastrService, private forgotService: ForgotService,
    private route: Router) {
    this.resetPassword = fb.group({
      userEmail: ['', [Validators.required,Validators.email,Validators.pattern(this.emailPattern)]],
      password: ['', [Validators.required,Validators.pattern(this.passwordRegex)]],
      newPassword: ['', [Validators.required,Validators.pattern(this.passwordRegex)]]
    })
  }
  get loginValidation() {
    return this.resetPassword.controls;
  }
  submit() {
    this.submitted = true;
    if (this.resetPassword.valid) {
      if (this.resetPassword.value.password == this.resetPassword.value.newPassword) {
        this.forgotService.changePassword(this.resetPassword.value).subscribe({
          next: (res) => {
            this.toaster.success("Password change successfuly");
            this.route.navigate(['login']);
          }, error: () => {
            this.toaster.error("Email didn't matched");
          }
        })
      }
      else {
        this.toaster.error("Password did not mathced")
      }
    }
    else {
      return;
    }
  }
  ngOnInit(): void {
  }
}
