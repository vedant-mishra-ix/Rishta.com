import { Component, OnInit } from '@angular/core';
import { FriendListService } from 'src/app/core/model/service/friend-list.service';

@Component({
  selector: 'app-friend-profile',
  templateUrl: './friend-profile.component.html',
  styleUrls: ['./friend-profile.component.css']
})
export class FriendProfileComponent implements OnInit {

  friendData:any=[];
  id = localStorage.getItem("Id:");
  requestSenderId = localStorage.getItem("RequestSenderId:");
  constructor(private friendService:FriendListService) { }
  ngOnInit(): void {
    this.friends();
  }
  friends()
  {
    this.friendService.friendList(this.id).subscribe({next:(res)=>
    {
      for(let i = 0 ; i < res.length ; i++)
      {
        if(res[i].requestSenderId == this.requestSenderId)
        {
          this.friendData.push(res[i]);
        }
      }
    }})
  }

}
