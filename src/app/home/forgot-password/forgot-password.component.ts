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

  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  resetPassword: FormGroup = new FormGroup({});
  submitted = false;
  constructor(
    private fb: FormBuilder,
    private toaster: ToastrService,
    private forgotService: ForgotService,
    private route: Router)
    {
    this.resetPassword = this.fb.group({
      userEmail: ['', [Validators.required,
                       Validators.email,
                       Validators.pattern(this.emailPattern)]],
    })
  }
  get loginValidation() {
    return this.resetPassword.controls;
  }
  submit() {
    this.submitted = true;
    if (this.resetPassword.valid) {
        this.forgotService.changePassword(this.resetPassword.value).
        subscribe({
          next: (res) => {
            this.toaster.success("Your password changed successfully please check your Gmail");
            this.route.navigate(['login']);
          },
          error: () => {
          }
        })
    }
    else {
      return;
    }
  }
  ngOnInit(): void {
  }
}
