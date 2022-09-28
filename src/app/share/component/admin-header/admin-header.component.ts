import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/auth/auth.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

  constructor(private route: Router , private authService: AuthService) { }

  logOut()
  {
    this.route.navigate([''])
    localStorage.removeItem('UserName:');
    localStorage.removeItem("RegisteredDataNotification:");
    localStorage.removeItem("SubscriberNotification:");
    localStorage.removeItem('role:');
    return this.authService.deleteToken();
  }
  ngOnInit(): void {
  }

}
