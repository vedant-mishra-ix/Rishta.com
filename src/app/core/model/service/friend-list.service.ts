import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FriendListService {

  constructor(private http: HttpClient) { }
  friendList(profile:any):Observable<any>
  {
    const options = { params: new HttpParams().set('id', profile) };
    return this.http.get(`${environment.baseApiUrl}/api/User/RequestAccept`,options);
  }
}
