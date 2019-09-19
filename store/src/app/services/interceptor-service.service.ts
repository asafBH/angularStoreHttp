import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class InterceptorServiceService implements HttpInterceptor {

  constructor() { }

  handleError(error: HttpErrorResponse) {
    console.log('error occured!');
    return throwError(error);
  }

  intercept(res: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log(res);
    return next.handle(res).pipe(catchError(this.handleError));
  }
}