import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor(private http: HttpClient) { }
  getCityData():Observable<any>
  {
    return this.http.get(`${environment.baseApiUrl}/api/City/Cities`);
  }
}
