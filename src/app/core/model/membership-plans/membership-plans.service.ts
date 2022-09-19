import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MembershipPlansService {

  constructor(private http: HttpClient) { }
  plans():Observable<any>
  {
    return this.http.get(`${environment.baseApiUrl}/api/MembershipPlans/Membership_Plans`);
  }
}
