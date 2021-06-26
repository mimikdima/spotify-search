import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {CommonService} from "../services/common.service";

@Injectable()
export class ApiInterceptor implements ApiInterceptor {
  constructor(public commonSrv: CommonService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.commonSrv.startSpinner();

    const authReq = req.clone({});
    return next.handle(authReq).pipe(
      tap(
        (event) => {
          if (event instanceof HttpResponse)
            this.commonSrv.stopSpinner();
        },
        (err) => {
          if (err instanceof HttpErrorResponse) {
            this.commonSrv.stopSpinner();
          }
        }
      )
    )
  }
}
