import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestProfileService {

  constructor(private http: HttpClient) { }
  Request(RegisteredId:any):Observable<any>
  {
    const parm = {};
    return this.http.post(`${environment.baseApiUrl}/api/User/RequestProfile`,RegisteredId,parm);
  }
  RequestList(Id:any):Observable<any>
  {
    const parm = {};
    return this.http.get(`${environment.baseApiUrl}/api/User/RequestProfiles?Id=`+Id,parm);
  }
}
