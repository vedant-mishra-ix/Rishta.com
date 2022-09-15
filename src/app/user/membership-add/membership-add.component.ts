import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MembershipPlansService } from 'src/app/core/model/membership-plans/membership-plans.service';
import { MembershipAddService } from 'src/app/core/model/service/membership-add.service';

@Component({
  selector: 'app-membership-add',
  templateUrl: './membership-add.component.html',
  styleUrls: ['./membership-add.component.css']
})
export class MembershipAddComponent implements OnInit {

  plansList: any = [];
  memberShip: FormGroup = new FormGroup({});
  planIdContain: any = [];
  id = localStorage.getItem("Id:");
  planId: any;
  memberShipList: any = [];
  count: number = 0;
  constructor(private fb: FormBuilder, private membershipPlans: MembershipPlansService,
    private toaster: ToastrService, private memberShipService: MembershipAddService,
    private route: Router) {
  }
  get memberShipValidation() {
    return this.memberShip.controls;
  }
  ngOnInit(): void {
    this.plans();
    this.membersList();
    this.memberShip = this.fb.group({
      Pay: ['', Validators.required],
      RegisteredId: [this.id],
      PlansId: [],
      PlansName: ['', Validators.required],
    })
  }
  membersList() {
    this.memberShipService.memberShipList().subscribe({
      next: (res) => {
        this.memberShipList = res;
      }
    })
  }
  plans() {
    this.membershipPlans.plans().subscribe({
      next: (res) => {
        this.plansList = res;
      }, error: () => { this.toaster.error("Something wrong") }
    })
  }
  onSelect(event: any) {
    this.planIdContain = this.plansList.filter((e: any) => e.plansName == event.target.value);
    this.planId = this.planIdContain[0].id;
    this.memberShip.patchValue({
      PlansId: this.planId
    })
  }
  submit() {
    for (let i = 0; i < this.memberShipList.length; i++) {
      if (this.memberShipList[i].id == this.id) {
        this.count++;
        break;
      }
    }
    if (this.count >= 1) {
      this.toaster.error("Already you have membership")
      this.memberShip.reset();
    }
    else {
      this.memberShipService.memberShip(this.memberShip.value).subscribe({
        next: (res) => {
          this.toaster.success("Subscription Added Successful");
          this.route.navigate(['User']);
        }, error: () => { this.toaster.error("Something Wrong") }
      })
    }
  }
}
