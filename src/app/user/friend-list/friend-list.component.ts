import { Component, OnInit } from '@angular/core';
import { FriendListService } from 'src/app/core/model/service/friend-list.service';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.css']
})
export class FriendListComponent implements OnInit {

  page:number=1;
  count:number=0;
  tableSize:number=3;
  tableSizes:any=[3,6,9,12];
  friendList:any=[];
  id = localStorage.getItem("Id:");
  constructor(private friendService:FriendListService) { }
  ngOnInit(): void {
    this.friends();
  }
  friends()
  {
    this.friendService.friendList(this.id).subscribe({next:(res)=>
    {
      this.friendList = res;
    }})
  }
  onTableDataChange(event:any)
  {
    this.page = event;
    this.friends();
  }
  onTableSizeChange(event:any):void
  {
    this.tableSize = event.target.value;
    this.page = 1;
    this.friends();
  }
}
