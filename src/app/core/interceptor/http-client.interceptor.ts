import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { catchError, map, Observable} from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { ToastrService } from 'ngx-toastr';
import { LoaderService } from 'src/app/share/loader.service';

@Injectable()
export class HttpClientInterceptor implements HttpInterceptor {

  constructor(
    private GuardService: AuthService,
    private toaster: ToastrService,
    private loaderService: LoaderService
  ) { }

  responseLoader(next:any,tokenreq:any)
  {
    return next.handle(tokenreq).pipe(
      catchError((error: HttpErrorResponse) => {
        this.loaderService.Loading.next(false);
        throw new Error();
      })
    ).pipe(map<HttpEvent<any>, any>((evt: HttpEvent<any>) => {
      if (evt instanceof HttpResponse) {
        this.loaderService.Loading.next(false);
      }
      return evt;
    }));
  }

  requestLoader(next:any,request:any)
  {
   return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        this.loaderService.Loading.next(false);
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          errorMessage = `${error.error.message}`;
        } else {
          errorMessage = `${error.error.status}\n: ${error.error.message}`;
        }
        this.toaster.error(errorMessage);
        throw new Error(errorMessage);
      })
    ).pipe(map<HttpEvent<any>, any>((evt: HttpEvent<any>) => {
      if (evt instanceof HttpResponse) {
        this.loaderService.Loading.next(false);
      }
      return evt;
    }));
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loaderService.Loading.next(true);
    const token = this.GuardService.getToken();

    if (token && token !== '') {
      const tokenreq = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + token),
      });
      return this.responseLoader(next,tokenreq);
    }
    return this.requestLoader(next,request);
  }
}
