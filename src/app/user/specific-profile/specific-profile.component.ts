import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-specific-profile',
  templateUrl: './specific-profile.component.html',
  styleUrls: ['./specific-profile.component.css']
})
export class SpecificProfileComponent implements OnInit {

  userName = localStorage.getItem('UserSpecific:');
  email = localStorage.getItem('UserSpecific1:');
  mobile = localStorage.getItem('UserSpecific2:');
  address = localStorage.getItem('UserSpecific3:');
  profilePhoto = localStorage.getItem('UserSpecific4:');
  constructor() {
  }

  ngOnInit(): void {
  }

}
