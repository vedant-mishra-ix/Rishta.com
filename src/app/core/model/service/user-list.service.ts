import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserListService {
  constructor(private http: HttpClient) { }
  Registered(index:any):Observable<any>
  {
    const options = { params: new HttpParams().set('Id', index) };
    return this.http.get(`${environment.baseApiUrl}/api/User`,options);
  }
}