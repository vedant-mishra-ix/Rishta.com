import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { GuardService } from 'src/app/core/guard/guard.service';
import { UserProfileComponent } from '../user-profile/user-profile.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  UserProfile = localStorage.getItem("ProfilePhoto:");
  UserName = localStorage.getItem("UserName:")
  constructor(private route : Router, private AuthService: GuardService) { }
  Logout()
  {
    this.route.navigate([''])
    return this.AuthService.deleteToken();
  }
  ngOnInit(): void {
    console.log("HEader: "+ this.UserProfile);

  }

}
