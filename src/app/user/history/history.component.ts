import { Component, OnInit } from '@angular/core';
import { RequestHistoryService } from 'src/app/core/model/service/request-history.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  HistoryList:any=[];
  Id = localStorage.getItem("Id:");
  constructor(private HistoryService: RequestHistoryService) { }

  ngOnInit(): void {
    this.History();
  }
  History()
  {
    this.HistoryService.History(this.Id).subscribe({next:(res)=>
    {
      for(let i = 0 ; i < res.length ; i++)
      {
        if(this.Id == res[i].registeredId)
        {
          this.HistoryList.push(res[i]);
        }
      }
    }})
  }
}
