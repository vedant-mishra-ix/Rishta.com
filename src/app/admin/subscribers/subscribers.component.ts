import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MembershipProfilesService } from 'src/app/core/admin-service/membership-profiles.service';

@Component({
  selector: 'app-subscribers',
  templateUrl: './subscribers.component.html',
  styleUrls: ['./subscribers.component.css']
})
export class SubscribersComponent implements OnInit {

  subscribersList:any=[];
  page:number=1;
  count:any;
  tableSize:number=3;
  image:any;
  constructor(
    private membershipService: MembershipProfilesService,
    private toaster:ToastrService)
    { }

  ngOnInit(): void {
    this.subscribers()
  }
  subscribers()
  {
    this.membershipService.membershipProfiles(this.page,this.tableSize).subscribe({next:(res)=>
    {
      this.subscribersList = res;
    }})
    this.dataCount();
  }
  remove(id:any)
  {
    this.membershipService.deleteProfile(id).subscribe({next:(res)=>
    {
      this.toaster.success("Membership Removed Successfuly");
      this.subscribers();
    },error:()=>
    {
    }})
  }
  dataCount()
  {
    this.membershipService.membershipProfiles().subscribe({
      next: (res) => {
        this.count = res.length;
      }
    })
  }
  onTableDataChange(event:any)
  {
    this.page = event;
    this.subscribers();
  }
  imageOpen(event:any)
  {
    this.image = event.profilePhoto;
  }
}
