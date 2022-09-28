import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-sidebar',
  templateUrl: './admin-sidebar.component.html',
  styleUrls: ['./admin-sidebar.component.css']
})
export class AdminSidebarComponent implements OnInit {

  constructor(private route:Router) { }

  navigateToRegistered()
  {
    this.route.navigate(['/admin/registered']);
  }
  navigateToReported()
  {
    this.route.navigate(['/admin/reported']);
  }
  navigateToSubscriber()
  {
    this.route.navigate(['/admin/subscriber']);
  }
  ngOnInit(): void {
  }

}
