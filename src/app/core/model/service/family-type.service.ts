import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FamilyTypeService {
  constructor(private http: HttpClient) { }
  specificProfile(id:any):Observable<any>
  {
    const options = { params: new HttpParams().set('id', id) };
    return this.http.get(`${environment.baseApiUrl}/api/User/RegisteredSpecificProfile`,options);
  }
}
