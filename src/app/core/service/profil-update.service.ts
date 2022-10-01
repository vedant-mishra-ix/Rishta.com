import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfilUpdateService {

  constructor(private http: HttpClient) { }
  update(profile:any):Observable<any>
  {
    return this.http.put(`${environment.baseApiUrl}/api/User/Registration`,profile);
  }
}
