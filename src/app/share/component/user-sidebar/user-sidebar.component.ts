import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.css']
})
export class UserSidebarComponent implements OnInit {

  constructor(private route:Router) { }

  navigateToPreference()
  {
    this.route.navigate(['/user/preference']);
  }
  navigateToFriends()
  {
    this.route.navigate(['/user/friends']);
  }
  navigateToHistory()
  {
    this.route.navigate(['/user/history']);
  }
  navigateToRequest()
  {
    this.route.navigate(['/user/request']);
  }
  navigateToMatches()
  {
    this.route.navigate(['/user/matches']);
  }
  navigateToMembership()
  {
    this.route.navigate(['/user/membership']);
  }
  ngOnInit(): void {
  }

}
