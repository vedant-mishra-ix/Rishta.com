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
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> 97d6a5956686e7f34d963dc30b59020dab2d6a6c
>>>>>>> a51345ccd83c29617aa61a45094d47c0ce2d6ca7
  page:number=1;
  count:number=0;
  tableSize:number=3;
  tableSizes:any=[3,6,9,12];
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
=======
>>>>>>> ecefed146e08f8c5d7c4f7dc2d4c85501ecaa656
>>>>>>> 97d6a5956686e7f34d963dc30b59020dab2d6a6c
>>>>>>> a51345ccd83c29617aa61a45094d47c0ce2d6ca7
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
