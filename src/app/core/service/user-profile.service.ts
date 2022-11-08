import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  constructor(private http: HttpClient) { }
  userProfile(profile:any):Observable<any>
  {
    const options = { params: new HttpParams().set('userName', profile) };
    return this.http.get(`${environment.baseApiUrl}/api/User/profile`,options);
  }
  profile(id:any):Observable<any>
  {
    const options = { params: new HttpParams().set('id', id) };
    return this.http.get(`${environment.baseApiUrl}/api/User/deatils`,options);
  }
}
