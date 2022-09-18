import { Component, OnInit } from '@angular/core';
import { UserListService } from 'src/app/core/model/service/user-list.service';

@Component({
  selector: 'app-profile-matched',
  templateUrl: './profile-matched.component.html',
  styleUrls: ['./profile-matched.component.css']
})
export class ProfileMatchedComponent implements OnInit {

  id = localStorage.getItem("Id:");
  city = localStorage.getItem("City:");
  gender = localStorage.getItem("Gender:");
  userList: any = [];
  constructor(private userListService: UserListService) { }

  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.userListService.registered(this.id).subscribe({
      next: (res) => {
        for (let i = 0; i < res.length; i++) {
          console.log("list 1:"+res[i].city)
          if ( res[i].city == this.city && res[i].sex != this.gender) {
            this.userList.push(res[i]);
            console.log("List: "+ res[i].sex);
          }
        }
      }
    })
  }
}
