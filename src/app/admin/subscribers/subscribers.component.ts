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
=======
<<<<<<< HEAD
>>>>>>> 97d6a5956686e7f34d963dc30b59020dab2d6a6c
      if(this.subscribersList.length != res.length)
      {
        this.notificationCount = 1;
        localStorage.setItem("SubscriberNotification:",this.notificationCount);
      }
    }})
  }
<<<<<<< HEAD
=======
=======
    }})
  }

>>>>>>> ecefed146e08f8c5d7c4f7dc2d4c85501ecaa656
>>>>>>> 97d6a5956686e7f34d963dc30b59020dab2d6a6c
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
=======
<<<<<<< HEAD
>>>>>>> 97d6a5956686e7f34d963dc30b59020dab2d6a6c
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
<<<<<<< HEAD
=======
=======
>>>>>>> ecefed146e08f8c5d7c4f7dc2d4c85501ecaa656
>>>>>>> 97d6a5956686e7f34d963dc30b59020dab2d6a6c
}
