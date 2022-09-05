import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StateService {
  constructor(private http: HttpClient) { }
  GetStateData():Observable<any>
  {
    return this.http.get(`${environment.baseApiUrl}/api/State`);
  }
}
