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

  HaveAccess(){
    var loggintoken=localStorage.getItem('token')||'';
    var _extractedtoken=loggintoken.split('.')[2];
    console.log(loggintoken);
    var _atobdata=atob(_extractedtoken);
    var _finaldata=JSON.parse(_atobdata);
    if(_finaldata.role=='Admin'){
      return true
    }else{
      alert('you not having access');
      return false
    }
  }
}
