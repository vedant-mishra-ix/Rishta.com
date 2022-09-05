import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor(private http: HttpClient) { }
  Registration(RegistrationData:any):Observable<any>
  {
    return this.http.post(`${environment.baseApiUrl}/api/Authenticate/register`,RegistrationData);
  }
}
