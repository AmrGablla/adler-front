import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AlertService } from '../../alert/alert.service';

/**
 * This Class is interceptor that is used to intercept response and handling error according to status code
 * @export
 * @class ErrorHandlerInterceptor
 * @implements {HttpInterceptor}
 */
@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
  constructor(private alertSrvc: AlertService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(catchError(this.handleError.bind(this)));
  }

  handleError(error: HttpErrorResponse): any {
    let errorMessage = error.error.message;

    // debugger;
    // let errorMessage = '';
    // switch (error.status) {
    //   case 400: // Bad Request
    //     errorMessage = error.error.message;
    //     break;
    //   case 401: // unauthorized
    //     errorMessage = 'Unauthorized Request';
    //     break;
    //   case 403: // forbidden
    //     errorMessage = 'Forbidden Request';
    //     break;
    //   case 404: // not found
    //     errorMessage = 'Request not found';
    //     break;
    //   case 405: // Method Not Allowed
    //     errorMessage = 'Request Method Not Allowed';
    //     break;
    //   case 500: // internal server error
    //     errorMessage = 'internal server error';
    //     break;
    //   case 0: // request cancelled
    //     errorMessage = "Can't connect to server";
    //     break;
    //   // this.messageService.add({ severity: 'error', summary: 'Error', detail: error.error.message || 'please try again later' });
    //   default:
    //     break;
    // }

    this.alertSrvc.newAlert('error', errorMessage);
    return throwError(errorMessage);
  }
}
