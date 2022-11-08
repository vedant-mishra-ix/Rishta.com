import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestHistoryService {
  constructor(private http: HttpClient) { }

  history(id:any,page?:any,tableSize?:any):Observable<any>
  {
    if(page != null && tableSize != null && id != null)
    {
    return this.http.get(`${environment.baseApiUrl}/api/User/RequestProfileHistory?id=${id}&pageNumber=${page}&pageSize=${tableSize}`);
    }
    else
    {
      return this.http.get(`${environment.baseApiUrl}/api/User/RequestProfileHistory?id=${id}`);
    }
  }
}
