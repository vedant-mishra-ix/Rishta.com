import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  BaseUrl =`http://localhost:55339/api/Authenticate/register`;
  constructor(private http: HttpClient) { }

  Registration(RegistrationData:any):Observable<any>
  {
    return this.http.post(`http://localhost:55339/api/Authenticate/register`,RegistrationData);
  }
}
