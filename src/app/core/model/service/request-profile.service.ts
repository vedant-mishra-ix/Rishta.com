import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RequestProfileService {

  constructor(private http: HttpClient) { }
  request(RegisteredId:any):Observable<any>
  {
    const parm = {};
    return this.http.post(`${environment.baseApiUrl}/api/User/RequestProfile`,RegisteredId,parm);
  }
  requestAccept(RegisteredId:any):Observable<any>
  {
    const parm = {};
    return this.http.post(`${environment.baseApiUrl}/api/User/RequestAccept`,RegisteredId,parm);
  }
  requestList(Id:any):Observable<any>
  {
    const parm = {};
    return this.http.get(`${environment.baseApiUrl}/api/User/RequestProfiles?Id=`+Id,parm);
  }
  delete(value:any):Observable<any>
  {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: value
    };
    return this.http.delete(`${environment.baseApiUrl}/api/User/RequestDelete`,
      options);
  }
}
