import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  BaseUrl ='http://localhost:55339';
  constructor(private http: HttpClient) { }

  GetCityData():Observable<any>
  {
    return this.http.get(`http://localhost:55339/api/City`);
  }
}
