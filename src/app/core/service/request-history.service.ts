import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestHistoryService {
  constructor(private http: HttpClient) { }

  history(id:any):Observable<any>
  {
    const parm = {};
    return this.http.get(`${environment.baseApiUrl}/api/User/RequestProfileHistory?id=`+id,parm);
  }
}
