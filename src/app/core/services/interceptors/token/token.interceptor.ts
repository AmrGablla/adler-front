import { Injectable, OnDestroy } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor, OnDestroy {
  subscribtions: Subscription[] = []; // to hold all subscriptions
  token: string;
  constructor(private userSrvc: AuthService) {
    // get token data
    let subs;
    if (this.userSrvc.userData$) {
      subs = this.userSrvc.userData$.subscribe(
        (data) => (this.token = data ? data.jwToken : undefined)
      );
      this.subscribtions.push(subs);
    }
  }
  ngOnDestroy(): void {
    // unsubscribe to all subscribtions to prevent data leakage and bad performance
    this.subscribtions.forEach((subs) => subs.unsubscribe());
  }

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (this.token) {
      // clone req and append token to it
      const tokenizedReq = request.clone({
        headers: request.headers.set('Authorization', 'Bearer ' + this.token),
      });
    }

    // clone req and append json content-type if not exist
    if (!request.headers.has('Content-Type')) {
      request = request.clone({
        headers: request.headers.set('Content-Type', 'application/json'),
      });
    }
    // clone req and append accept json content-type  to prevent cors problem
    request = request.clone({
      setHeaders: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods':
          'GET, POST, PATCH, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token',
        Accept: 'application/json',
        Authorization: `Bearer ${this.token}`,
      },
    });
    return next.handle(request);
  }
}
