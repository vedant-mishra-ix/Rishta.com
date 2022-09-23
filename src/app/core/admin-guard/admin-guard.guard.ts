import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { GuardService } from '../guard/guard.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardGuard implements CanActivate {
  constructor(private guardServic : GuardService , private route : Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const token = this.guardServic.getToken();
      if(token && token !== '')
      {
        return true;
      }
      this.route.navigate(['./login'])
      return false;
  }

}
