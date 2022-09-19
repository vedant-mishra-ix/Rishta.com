import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MembershipProfilesService } from 'src/app/core/model/admin-service/membership-profiles.service';

@Component({
  selector: 'app-subscribers',
  templateUrl: './subscribers.component.html',
  styleUrls: ['./subscribers.component.css']
})
export class SubscribersComponent implements OnInit {

  subscribersList:any=[];
<<<<<<< HEAD
  page:number=1;
  count:number=0;
  tableSize:number=3;
  tableSizes:any=[3,6,9,12];
  notificationCount:any;
=======
>>>>>>> ecefed146e08f8c5d7c4f7dc2d4c85501ecaa656
  constructor(private membershipService: MembershipProfilesService,private toaster:ToastrService) { }

  ngOnInit(): void {
    this.subscribers()
  }
  subscribers()
  {
    this.membershipService.membershipProfiles().subscribe({next:(res)=>
    {
      this.subscribersList = res;
<<<<<<< HEAD
      if(this.subscribersList.length != res.length)
      {
        this.notificationCount = 1;
        localStorage.setItem("SubscriberNotification:",this.notificationCount);
      }
    }})
  }
=======
    }})
  }

>>>>>>> ecefed146e08f8c5d7c4f7dc2d4c85501ecaa656
  remove(id:any)
  {
    this.membershipService.deleteProfile(id).subscribe({next:(res)=>
    {
      this.toaster.success("Membership Removed Successfuly");
      this.subscribers();
    },error:()=>
    {
      this.toaster.error("Something wrong")
    }})
  }
<<<<<<< HEAD
  onTableDataChange(event:any)
  {
    this.page = event;
    this.subscribers();
  }
  onTableSizeChange(event:any):void
  {
    this.tableSize = event.target.value;
    this.page = 1;
    this.subscribers();
  }
=======
>>>>>>> ecefed146e08f8c5d7c4f7dc2d4c85501ecaa656
}
