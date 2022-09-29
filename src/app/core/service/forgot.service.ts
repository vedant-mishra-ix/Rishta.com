import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ForgotService {

  constructor(private http: HttpClient) { }
  changePassword(email:any):Observable<any>
  {
    return this.http.put(`${environment.baseApiUrl}/api/Authenticate/SendMail`,email);
  }
}
