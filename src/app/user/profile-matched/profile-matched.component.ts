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
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 97d6a5956686e7f34d963dc30b59020dab2d6a6c
  page:number=1;
  count:number=0;
  tableSize:number=3;
  tableSizes:any=[3,6,9,12];
  notificationCount:any;
<<<<<<< HEAD
=======
=======
>>>>>>> ecefed146e08f8c5d7c4f7dc2d4c85501ecaa656
>>>>>>> 97d6a5956686e7f34d963dc30b59020dab2d6a6c
  constructor(private userListService: UserListService) { }

  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.userListService.registered(this.id).subscribe({
      next: (res) => {
        for (let i = 0; i < res.length; i++) {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 97d6a5956686e7f34d963dc30b59020dab2d6a6c
          if ( res[i].city == this.city && res[i].sex != this.gender) {
            this.userList.push(res[i]);
            this.notificationCount = this.userList.length;
            localStorage.setItem("NotificationCount:",this.notificationCount);
<<<<<<< HEAD
=======
=======
          console.log("list 1:"+res[i].city)
          if ( res[i].city == this.city && res[i].sex != this.gender) {
            this.userList.push(res[i]);
            console.log("List: "+ res[i].sex);
>>>>>>> ecefed146e08f8c5d7c4f7dc2d4c85501ecaa656
>>>>>>> 97d6a5956686e7f34d963dc30b59020dab2d6a6c
          }
        }
      }
    })
  }
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 97d6a5956686e7f34d963dc30b59020dab2d6a6c
  onTableDataChange(event:any)
  {
    this.page = event;
    this.getData();
  }
  onTableSizeChange(event:any):void
  {
    this.tableSize = event.target.value;
    this.page = 1;
    this.getData();
  }
<<<<<<< HEAD
=======
=======
>>>>>>> ecefed146e08f8c5d7c4f7dc2d4c85501ecaa656
>>>>>>> 97d6a5956686e7f34d963dc30b59020dab2d6a6c
}
