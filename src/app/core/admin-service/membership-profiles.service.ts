import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MembershipProfilesService {

  constructor(private http: HttpClient) { }
  membershipProfiles(page?:any,tableSize?:any):Observable<any>
  {
    const options = { params: new HttpParams().set('pageNumber', page).
    append('pageSize',tableSize)};
    if(page != null && tableSize != null)
    {
    return this.http.get(`${environment.baseApiUrl}/api/Admin/MembersipProfiles`,options);
    }
    else
    {
      return this.http.get(`${environment.baseApiUrl}/api/Admin/MembersipProfiles`);
    }
  }
  deleteProfile(index:any):Observable<any>
  {
    return this.http.delete(`${environment.baseApiUrl}/api/Admin/MemberShipProfiles/${index}`)
  }
}
