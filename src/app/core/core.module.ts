import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import {
  AuthGuard,
  AuthService,
  LoggedInGuard,
  LoaderService,
  LoadingInterceptor,
  ErrorHandlerInterceptor,
  TokenInterceptor,
  AlertService
} from './services';
import { ConfirmationService, MessageService } from 'primeng/api';
import { ConfirmService } from './services/confirmation/confirm.service';
/**
 * @description this module contain all singletons services
 * It is only imported once on the app module
 */
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    AuthService,
    LoggedInGuard,
    AlertService,
    LoaderService,
    MessageService,
    ConfirmService,
    ConfirmationService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true, },
    { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorHandlerInterceptor, multi: true },

  ],
})
export class CoreModule {
  /**
   * To make core module a real singleton module and prevent importing it more than one time
   * @param {CoreModule} parentModule
   * @memberof CoreModule
   */
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {

    this.throwIfAlreadyLoaded(parentModule, `CoreModule`);
    //@Optional : a constructor paramater decorator that makes a dependency as optional
    //@SkipSelf : go to the parent injector and see if we can import a core module
  }
  throwIfAlreadyLoaded(parentModule: any, moduleName: string): void {
    if (parentModule) { // has parent module
      throw new Error(`${moduleName} has already been loaded. Import core module in the app module only.`)
    }
  }
}
