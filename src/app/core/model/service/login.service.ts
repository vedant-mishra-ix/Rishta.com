import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  BaseUrl ='http://localhost:55339/api/Authenticate/login';
  constructor(private http: HttpClient) { }

  LoginData(LoginData:any):Observable<any>
  {
    return this.http.post<any>(`http://localhost:55339/api/Authenticate/login`,LoginData);
  }
}
