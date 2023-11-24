import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, finalize } from 'rxjs';
import { SpinnerService } from '../service/spinner/spinner.servicer';

@Injectable()
export class SpinnerInterceptorInterceptor implements HttpInterceptor {

  constructor(private spinnerSvc:SpinnerService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.spinnerSvc.show();
    return next.handle(request).pipe(
      finalize(()=> this.spinnerSvc.hide())
    )
    return next.handle(request);
  }
}
