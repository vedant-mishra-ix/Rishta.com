import { Component, OnInit } from '@angular/core';
import { RequestHistoryService } from 'src/app/core/model/service/request-history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  historyList:any=[];
  id = localStorage.getItem("Id:");
  page:number=1;
  count:number=0;
  tableSize:number=3;
  tableSizes:any=[3,6,9,12];
  constructor(private historyService: RequestHistoryService) { }

  ngOnInit(): void {
    this.history();
  }
  history()
  {
    this.historyService.history(this.id).subscribe({next:(res)=>
    {
      for(let i = 0 ; i < res.length ; i++)
      {
        if(this.id == res[i].registeredId)
        {
          this.historyList.push(res[i]);
        }
      }
    }})
  }
  onTableDataChange(event:any)
  {
    this.page = event;
    this.history();
  }
  onTableSizeChange(event:any):void
  {
    this.tableSize = event.target.value;
    this.page = 1;
    this.history();
  }
}
