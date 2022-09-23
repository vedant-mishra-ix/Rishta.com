import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ForgotService } from 'src/app/core/model/service/forgot.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  resetPassword: FormGroup = new FormGroup({});
  constructor(private fb: FormBuilder, private toaster: ToastrService,private forgotService:ForgotService,
    private route: Router)
  {
    this.resetPassword = fb.group({
      userEmail: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      newPassword: ['', Validators.required]
    })
  }
  get loginValidation() {
    return this.resetPassword.controls;
  }
  submit() {
    if (this.resetPassword.value.password == this.resetPassword.value.newPassword)
    {
      this.forgotService.changePassword(this.resetPassword.value).subscribe({next:(res)=>
      {
        this.toaster.success("Password change successfuly");
        this.route.navigate(['login']);
      },error:()=>
    {
      this.toaster.error("Something wrong or email didn't matched");
    }})
    }
    else {
      this.toaster.error("Password did not mathced")
    }
  }
  ngOnInit(): void {
  }
}
