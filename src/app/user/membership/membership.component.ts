import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { MembershipPlansService } from 'src/app/core/membership-plans/membership-plans.service';

@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css']
})
export class MembershipComponent implements OnInit {

  plansList:any=[];
  constructor(private membershipPlans: MembershipPlansService,private toaster : ToastrService) { }
  ngOnInit(): void {
    this.plans();
  }
  plans()
  {
    this.membershipPlans.plans().subscribe({next:(res)=>
    {
      this.plansList = res;
    },error:()=>{this.toaster.error("Something wrong")}})
  }
}
