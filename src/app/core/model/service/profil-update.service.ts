import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfilUpdateService {

  constructor(private http: HttpClient) { }
  Update(profile:any):Observable<any>
  {
    //const options = { params: new HttpParams().set('Username', profile) };
    return this.http.put(`${environment.baseApiUrl}/api/User`,profile);
  }
}
