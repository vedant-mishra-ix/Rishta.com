import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ReportedProfilesService {
  constructor(private http: HttpClient) { }
  reportedAccount():Observable<any>
  {
    return this.http.get(`${environment.baseApiUrl}/api/Admin/ReportedProfileData`);
  }
}
