import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, retry } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {

  constructor(private http: HttpClient) { }
  userProfile(profile:string):Observable<any>
  {
    const options = { params: new HttpParams().set('Username', profile) };
    return this.http.get(`${environment.baseApiUrl}/api/User/profile`,options);
  }
}
