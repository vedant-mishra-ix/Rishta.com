import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  BaseUrl ='http://localhost:55339';
  constructor(private http: HttpClient) { }

  GetStateData():Observable<any>
  {
    return this.http.get(`http://localhost:55339/api/State`);
  }
}
