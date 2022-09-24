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
  page:number=1;
  count:number=0;
  tableSize:number=3;
  tableSizes:any=[3,6,9,12];
  filterTerm!: string;
  image:any;
  constructor(private membershipService: MembershipProfilesService,private toaster:ToastrService) { }

  ngOnInit(): void {
    this.subscribers()
  }
  subscribers()
  {
    this.membershipService.membershipProfiles().subscribe({next:(res)=>
    {
      this.subscribersList = res;
    }})
  }
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
  imageOpen(event:any)
  {
    this.image = event.profilePhoto;
  }
}
