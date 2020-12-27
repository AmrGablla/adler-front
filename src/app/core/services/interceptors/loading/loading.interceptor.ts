import { Injectable, Injector } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { delay, finalize } from 'rxjs/operators';
import { LoaderService } from '../../loader/loader.service';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  activeRequests: number = 0; //number of active request on the queue

  /**
   * URLs in which the loading screen should not be enabled
   */
  skippUrls = [];

  constructor(private injector: Injector) { }
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // flag to indicate if the loading screen is displayed now or not
    let displayLoadingScreen = true;
    // check if the current request on  the skipped urls or not
    for (const skippUrl of this.skippUrls) {
      if (new RegExp(skippUrl).test(req.url)) {
        displayLoadingScreen = false;
        break;
      }
    }
    // loader service injection
    const loaderService = this.injector.get(LoaderService);


    if (displayLoadingScreen) {
      if (this.activeRequests === 0) {// no active request
        loaderService.show();
      }
      this.activeRequests++;

      return next.handle(req).pipe(
        delay(100),
        finalize(() => {// triggered when the response is come and the request is about to be finalized
          this.activeRequests--;
          if (this.activeRequests === 0) {// no active request
            loaderService.hide()
          }
        })
      )
    } else {
      return next.handle(req);
    }
  }
}
