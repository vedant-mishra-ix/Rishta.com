import { Component, OnInit } from '@angular/core';
import { RequestHistoryService } from 'src/app/core/service/request-history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  historyList:any=[];
  id = localStorage.getItem("Id:");
  page:number=1;
  count:any;
  tableSize:number=3;
  image:any;
  constructor(private historyService: RequestHistoryService) { }

  ngOnInit(): void {
    this.history();
  }
  history()
  {
    this.historyService.history(this.id,this.page,this.tableSize).subscribe({next:(res)=>
    {
      this.historyList.length=0;
      for(let i = 0 ; i <= res.length ; i++)
      {
        if(this.id == res[i].registeredId)
        {
          this.historyList.push(res[i]);
        }
      }
    }})
    this.dataCount();
  }
  dataCount()
  {
    this.historyService.history(this.id).subscribe({next:(res)=>
      {
        this.count = res.length;
        console.log("size of: "+ this.count);

      }})
  }
  onTableDataChange(event:any)
  {
    this.page = event;
    this.history();
  }
  imageOpen(event:any)
  {
    this.image = event.requestImage;
  }
}
