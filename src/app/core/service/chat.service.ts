import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient) { }
  chat(message:any):Observable<any>
  {
    return this.http.post(`${environment.baseApiUrl}/api/User/Chats`,message);
  }
  senderMessage(senderId:any,recieverId:any):Observable<any>
  {
    const options = { params: new HttpParams().set('senderId',senderId)
    .append('recieverId',recieverId) };
    return this.http.get(`${environment.baseApiUrl}/api/User/SenderMessages`,options);
  }
  recieverMessage(senderId:any,recieverId:any)
  {
    const options = { params: new HttpParams().set('senderId',senderId)
    .append('recieverId',recieverId) };
    return this.http.get(`${environment.baseApiUrl}/api/User/RecieverMessages`,options);
  }
}
