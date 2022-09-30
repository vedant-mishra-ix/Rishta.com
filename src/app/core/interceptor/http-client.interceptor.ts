import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse
} from '@angular/common/http';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { ToastrService } from 'ngx-toastr';
import { LoaderService } from 'src/app/share/loader.service';

@Injectable()
export class HttpClientInterceptor implements HttpInterceptor {


  constructor(
    private GuardService: AuthService,
    private toaster: ToastrService,
  ) { }


  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const token = this.GuardService.getToken();
    if (token && token !== '') {
      const tokenreq = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + token),
      });
      return next.handle(tokenreq)
    }
    return next.handle(request).pipe(
      retry(1),
      catchError((error: HttpErrorResponse) => {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
          // client-side error
          errorMessage = `${error.error.message}`;
        } else {
          // server-side error
          errorMessage = `${error.error.status}\n: ${error.error.message}`;
        }
        this.toaster.error(errorMessage);
        return throwError(errorMessage);
      })
    );
  }
}
