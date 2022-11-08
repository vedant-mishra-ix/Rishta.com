import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ChatService } from 'src/app/core/service/chat.service';
import { FriendListService } from 'src/app/core/service/friend-list.service';

@Component({
  selector: 'app-friend-list',
  templateUrl: './friend-list.component.html',
  styleUrls: ['./friend-list.component.css']
})
export class FriendListComponent implements OnInit {

  page:number=1;
  count:any;
  tableSize:number=3;
  friendList:any=[];
  id = localStorage.getItem("Id:");
  recirverId:any;
  senderMessageList:any=[];
  recieverMessageList:any=[];
  userName:any;
  requestSenderId:any;
  message: FormGroup = new FormGroup({});
  constructor(
    private fb: FormBuilder,
    private friendService:FriendListService,
    private chatService:ChatService,
    private toaster:ToastrService,
    private route:Router)
   {
    this.message = this.fb.group({
      Message:[''],
      senderId:[''],
      recieverId:[''],
    })
    }
  ngOnInit(): void {
    this.friends();
  }
  friends()
  {
    this.friendService.friendList(this.id,this.page,this.tableSize).subscribe({next:(res)=>
    {
      this.friendList = res;
    }})
    this.dataCount();
  }
  dataCount()
  {
    this.friendService.friendList(this.id).subscribe({next:(res)=>
      {
        this.count = res.length;
      }})
  }
  onTableDataChange(event:any)
  {
    this.page = event;
    this.friends();
  }
  submit()
  {
    this.message.patchValue({
      senderId:this.id,
      recieverId:this.recirverId,
    })
    this.chatService.chat(this.message.value).
    subscribe({next:(res)=>
      {
        this.toaster.success("Message Send Successfuly");
      },
    error:()=>
    {}
  })
      this.message.reset();
    }
  open(event:any)
  {
    this.recirverId = event.requestSenderId;
    this.userName = event.userName;
    this.senderChat();
    this.recieverChat();
  }
  friendProfile(event:any)
  {
    this.requestSenderId = event.requestSenderId;
    this.route.navigate([`/user/friends-profile/${this.requestSenderId}`]);
  }
  senderChat()
  {
    this.chatService.senderMessage(this.id,this.recirverId).
    subscribe({next:(res)=>
    {
      this.senderMessageList = res;
      this.recieverChat();
    }})
  }
  recieverChat()
  {
    this.chatService.recieverMessage(this.id,this.recirverId).
    subscribe({next:(res)=>
    {
      this.recieverMessageList = res;
    }})
  }
}
