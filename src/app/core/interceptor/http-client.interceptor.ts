import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { GuardService } from '../guard/guard.service';

@Injectable()
export class HttpClientInterceptor implements HttpInterceptor {

  constructor(private GuardService : GuardService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.GuardService.getToken();
    if(token && token !== '')
    {
      const tokenreq = request.clone({
        headers:request.headers.set('Authorization', 'Bearer ' + token),
      });
      return next.handle(tokenreq)
    }
    return next.handle(request);
  }
}
