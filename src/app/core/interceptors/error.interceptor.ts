import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, EMPTY, Observable } from 'rxjs';
import { ErrorService } from '../services/error.service';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(private errorService: ErrorService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError( err => {
        console.log(err);
        let message = "Error fetching data: " + err.name
        this.errorService.setErrorMessage(message)
        return EMPTY
      } )
    );
  }

}

