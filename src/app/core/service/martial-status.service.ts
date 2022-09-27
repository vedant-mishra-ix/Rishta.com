import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MartialStatusService {

  constructor(private http: HttpClient) { }
  martial(profile:string):Observable<any>
  {
    const options = { params: new HttpParams().set('martialStatus', profile) };
    return this.http.get(`${environment.baseApiUrl}/api/User/Martial`,options);
  }
}
