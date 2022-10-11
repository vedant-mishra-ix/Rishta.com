import { Component,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from 'src/app/core/auth/auth.service';
import { Role } from 'src/app/core/model/role';
import { LoginService } from 'src/app/core/service/login.service';
import { VoiceRecognisizeService } from 'src/app/share/voice-recognisize.service';

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
  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private guardService: AuthService,
    private route: Router,
    private toastr: ToastrService,
    public voiceService : VoiceRecognisizeService)
    {
    this.loginProfile = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    })
    this.voiceService.init()
  }
  login() {
    this.submitted = true;
    if (!this.loginProfile.invalid) {
      this.loginService.loginData(this.loginProfile.value).
      subscribe({
        next: (res) => {
          if(res.token)
          {
          this.color = "ForestGreen";
          this.userName = this.loginProfile.value.userName;
          localStorage.setItem('UserName:', this.userName);
          this.guardService.setToken(res.token);
          localStorage.setItem('role:', res.role);
          this.toastr.success("Successful Login")
          var getRole = localStorage.getItem('role:');
          if( getRole === "User")
          {
            this.route.navigate(['/user']);
          }
          if(getRole === "Admin"){
            this.route.navigate(['/admin']);
          }
        }
        },
        error: () => {}
      });
    }
  }
  get loginValidation() {
    return this.loginProfile.controls;
  }
  ngOnInit(): void {
  }

  // speach to text
  startService(){
    this.voiceService.start()
  }
  stopService(){
    this.voiceService.stop()
  }
}
