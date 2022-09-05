import { Component, OnInit } from '@angular/core';
import { UserListService } from 'src/app/core/model/service/user-list.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  UserList:any[]=[];
  Id = localStorage.getItem("Id:");
  constructor(private UserListService:UserListService) { }

  ngOnInit(): void {
    this.GetData();
  }

  GetData()
  {
    this.UserListService.Registered(this.Id).subscribe({next:(res)=>
      {
        for(let i = 0 ; i < res.length ; i++ )
        {
          if(res[i].userName != 'pankaj')
          {
            this.UserList.push(res[i]);
            console.log("data: "+ this.UserList);
          }
        }
      }})
  }

}
