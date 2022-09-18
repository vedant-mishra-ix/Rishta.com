import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GuardService } from 'src/app/core/guard/guard.service';

@Component({
  selector: 'app-admin-header',
  templateUrl: './admin-header.component.html',
  styleUrls: ['./admin-header.component.css']
})
export class AdminHeaderComponent implements OnInit {

  constructor(private route: Router , private authService: GuardService) { }

  logOut()
  {
    this.route.navigate([''])
    localStorage.removeItem('UserName:');
    localStorage.removeItem('role:');
    return this.authService.deleteToken();
  }
  ngOnInit(): void {
  }

}
