import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-specific-profile',
  templateUrl: './specific-profile.component.html',
  styleUrls: ['./specific-profile.component.css']
})
export class SpecificProfileComponent implements OnInit {

  UserName = localStorage.getItem('UserSpecific:');
  Email = localStorage.getItem('UserSpecific1:');
  Mobile = localStorage.getItem('UserSpecific2:');
  Address = localStorage.getItem('UserSpecific3:');
  ProfilePhoto = localStorage.getItem('UserSpecific4:');
  constructor() {
  }

  ngOnInit(): void {
  }

}
