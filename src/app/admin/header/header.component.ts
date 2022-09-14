import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GuardService } from 'src/app/core/guard/guard.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private route: Router , private authService: GuardService) { }

  logOut()
  {
    this.route.navigate([''])
    return this.authService.deleteToken();
  }
  ngOnInit(): void {
  }

}
