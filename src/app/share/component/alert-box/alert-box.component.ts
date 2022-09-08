import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-alert-box',
  templateUrl: './alert-box.component.html',
  styleUrls: ['./alert-box.component.css']
})
export class AlertBoxComponent implements OnInit {

  @Output() PopItem = new EventEmitter<boolean>();
  constructor() { }
  displayStyle = "none";
  id:number=0;
  clickYes:boolean=false;
  clickNo:boolean=false;

  openPopup() {
    this.displayStyle = "block";
  }
  okPopup() {
    this.displayStyle = "none";
    this.clickYes = true;
    this.PopItem.emit(this.clickYes);
    return true;
  }
  closePopup() {
    this.displayStyle = "none";
    this.clickNo = true;
  }
  ngOnInit(): void {
  }

}
