import { Injectable, OnDestroy } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthService } from '../../auth/auth.service';
import { Roles } from '../../../../shared/models/roles.model';
/**
 * this guard is to limit pages that used to from logged in users only
 */
@Injectable()
export class AuthGuard implements CanActivate,OnDestroy {
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
    if(this.loggedIn){
      const currentUser = this.authSrvc.userData;
        if (currentUser) {
            if (next.data.roles && next.data.roles.indexOf(Roles[currentUser.roles]) === -1) {
                this.router.navigate(['/']);
                return false;
            }
            return true;
        }
      return true
    } else {
      this.router.navigate(['/login'])
      return false
    }
  }

}
