import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  BaseUrl ='http://localhost:55339';
  constructor(private http: HttpClient) { }

  Registration(RegistrationData:string):Observable<any>
  {
    return this.http.post(`http://localhost:55339/api/Registration`,RegistrationData);
  }
}
