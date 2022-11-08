import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegisteredService {

  constructor(private http: HttpClient) { }
  registered(index:any,page?:any,tableSize?:any):Observable<any>
  {
   // const options = { params: new HttpParams().set('id', index) };
   if(page != null && tableSize != null && index != null)
   {
    return this.http.
    get(`${environment.baseApiUrl}/api/Admin?id=${index}&pageNumber=${page}&pageSize=${tableSize}`);
   }
   else
   {
    return this.http.get(`${environment.baseApiUrl}/api/Admin?id=${index}`);
   }
  }
}
