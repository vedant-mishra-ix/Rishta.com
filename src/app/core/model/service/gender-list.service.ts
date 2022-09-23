import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GenderListService {

  constructor(private http: HttpClient) { }
  gender(profile:string):Observable<any>
  {
    const options = { params: new HttpParams().set('sex', profile) };
    return this.http.get(`${environment.baseApiUrl}/api/User/Gender`,options);
  }
}
