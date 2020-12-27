import { Injectable, OnDestroy } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';
/**
 * this guard is to prevent logged in users from open pages that implement it
 */
@Injectable()
export class LoggedInGuard implements CanActivate,OnDestroy {
  subscriptions : Subscription[] = []
  loggedIn:Boolean
  constructor(
    private authSrvc:AuthService,
    private router:Router
    ){
      // listen to login status
      this.authSrvc.checkForUserExistance();
      const subs = this.authSrvc.loggedIn$.subscribe((status)=>{
        this.loggedIn = status
      })
      this.subscriptions.push(subs)
    }
  ngOnDestroy(){
    this.subscriptions.forEach( subs=>subs.unsubscribe() )
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(!this.loggedIn){
      return true
    } else {
      this.router.navigate(['/home'])
      return false
    }
  }

}
