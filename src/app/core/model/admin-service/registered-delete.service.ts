import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisteredDeleteService {

  constructor(private http: HttpClient) { }
  delete(index:any):Observable<any>
  {
    const options = { params: new HttpParams().set('id', index) };
    return this.http.delete(`${environment.baseApiUrl}/api/Admin/${index}`);
  }
}
