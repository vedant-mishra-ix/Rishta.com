import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FriendListService } from 'src/app/core/model/service/friend-list.service';
import { FamilyTypeService } from 'src/app/core/model/service/family-type.service';

@Component({
  selector: 'app-friend-profile',
  templateUrl: './friend-profile.component.html',
  styleUrls: ['./friend-profile.component.css']
})
export class FriendProfileComponent implements OnInit {

  friendData:any=[];
  preferenceData:any=[];
  id = localStorage.getItem("Id:");
  requestSenderId!:any;
  constructor(private friendService:FriendListService,private idRoute: ActivatedRoute,
              private specificProfileService:FamilyTypeService) { }
  ngOnInit(): void {
    this.requestSenderId = this.idRoute.snapshot.paramMap.get('requestSenderId');
    this.preferenceProfile();
  }
  friends()
  {
    this.friendService.friendList(this.id).subscribe({next:(res)=>
    {
      for(let i = 0 ; i < res.length ; i++)
      {
        this.friendData=[];
        if(res[i].requestSenderId == this.requestSenderId)
        {
          this.friendData.push(res[i]);
        }
      }
    }})
  }
  preferenceProfile()
  {
    this.specificProfileService.specificProfile(this.requestSenderId).subscribe({next:(res)=>
      {
        for(let i = 0 ; i < res.length ; i++)
        {
          this.friendData.push(res[i]);
        }
      }})
  }
}
