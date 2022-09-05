import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GuardService {

  tokenKey:string = 'token';
  constructor() { }
  setToken(token:string)
  {
    localStorage.setItem(this.tokenKey,token);
  }
  getToken()
  {
    return localStorage.getItem(this.tokenKey);
  }
  deleteToken()
  {
    return localStorage.removeItem(this.tokenKey);
  }
}
