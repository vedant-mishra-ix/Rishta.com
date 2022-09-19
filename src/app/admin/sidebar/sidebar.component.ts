import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  registeredProfile = localStorage.getItem("RegisteredDataNotification:");
  subscriberProfile = localStorage.getItem("SubscriberNotification:");
  constructor() { }

  ngOnInit(): void {
  }
  removeRegisteredDataNotification() {
    localStorage.removeItem("RegisteredDataNotification:");
    this.registeredProfile = "";
  }
  removeSubscriberNotification() {
    localStorage.removeItem("SubscriberNotification:");
    this.subscriberProfile = "";
  }
}

