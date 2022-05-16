import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { finalize, Observable } from 'rxjs';
import { BusyService } from 'src/app/shared/busy/busy.service';

@Injectable()
export class BusyInterceptor implements HttpInterceptor {

  constructor(private busyService: BusyService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.busyService.increment()
    return next.handle(request).pipe(
      finalize( () => this.busyService.decrement())
    );
  }
}
