
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportProfileService {

  constructor(private http: HttpClient) { }
  ReportProfile(Id:any):Observable<any>
  {
    console.log("Report data: "+ Id);
    const parm = {};
    return this.http.post(`${environment.baseApiUrl}/api/User/ReportProfile?Id=`+Id,parm);
  }
}
