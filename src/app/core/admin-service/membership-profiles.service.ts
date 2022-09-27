import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MembershipProfilesService {

  constructor(private http: HttpClient) { }
  membershipProfiles():Observable<any>
  {
    return this.http.get(`${environment.baseApiUrl}/api/Admin/MembersipProfiles`);
  }
  deleteProfile(index:any):Observable<any>
  {
    return this.http.delete(`${environment.baseApiUrl}/api/Admin/MemberShipProfiles/${index}`)
  }
}
