import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminProfileService {

  constructor(private http: HttpClient) { }
  UserProfile(profile:string):Observable<any>
  {
    const options = { params: new HttpParams().set('Username', profile) };
    return this.http.get(`${environment.baseApiUrl}/api/Admin/profile`,options);
  }
}