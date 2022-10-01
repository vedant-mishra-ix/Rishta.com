import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MembershipAddService {

  constructor(private http: HttpClient) { }
  memberShip(membership:any):Observable<any>
  {
    return this.http.post(`${environment.baseApiUrl}/api/User/Membership`,membership);
  }
  memberShipList()
  {
    return this.http.get(`${environment.baseApiUrl}/api/User/MembersipList`);
  }
  deleteProfile(index:any):Observable<any>
  {
    return this.http.delete(`${environment.baseApiUrl}/api/User/MemberShipProfiles/${index}`)
  }
}
