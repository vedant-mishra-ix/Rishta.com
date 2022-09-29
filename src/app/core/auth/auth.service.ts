import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

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
  // get isLoggedIn(): boolean {
  //   let authToken = this.getToken();
  //   return authToken !== null ? true : false;
  // }
}
