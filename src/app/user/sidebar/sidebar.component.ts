import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

 profileMatched =  localStorage.getItem("NotificationCount:");
 requestGet = localStorage.getItem("RequestGet:");
  constructor() { }

  ngOnInit(): void {
  }
  removeProfileMatchedNotification()
  {
    localStorage.removeItem("NotificationCount:");
    this.profileMatched = "";
  }
  removeRequestNotification()
  {
    localStorage.removeItem("RequestGet:");
    this.requestGet = "";
  }

}
