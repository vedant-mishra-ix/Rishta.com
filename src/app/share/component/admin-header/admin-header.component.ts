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
<<<<<<< HEAD
    localStorage.removeItem("RegisteredDataNotification:");
    localStorage.removeItem("SubscriberNotification:");
=======
>>>>>>> ecefed146e08f8c5d7c4f7dc2d4c85501ecaa656
    localStorage.removeItem('role:');
    return this.authService.deleteToken();
  }
  ngOnInit(): void {
  }

}
