import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router } from '@angular/router';
/**
 * this class hold all the methods used in authentication
 *
 * @export
 * @class AuthService
 */
@Injectable()

export class AuthService {
  // the name of the keys to be stored on local storage
  localStorageKeys  = { jwToken: 'jwToken', userName: 'userName', id: 'id',roles:"roles",email:'email',isVerified:'isVerified' };
  // if the user open a url on the webiste and he is not logged in this variable hold this value and after success login redirect the user to the targeted page
  returnUrl = null;
  // flag that indicate that is it the first call of a afucntion or not
  private firstLoad: boolean = true

  // a behavior subject that hold the data of the user
  private _userData: BehaviorSubject<any>;

  // a behavior subject that used as an indication for the status of the user
  private loggedIn = new BehaviorSubject(false);

  //to encapsulate the behavior subject and prevent callers from passing data to the _userData
  userData$:Observable<any>

  //to encapsulate the behavior subject and prevent callers from changing the status of user (loggedIn)
  loggedIn$ = this.loggedIn.asObservable();

  constructor(private router: Router) { }

  /**
   * save user data on localstorage
   * save user data on app instance
   * change the status of the logged in
   * @param user
   */
  saveUserData(any:any ): void {
    // save user data on localstorage
    localStorage.setItem( this.localStorageKeys.email, any.email );
    localStorage.setItem( this.localStorageKeys.jwToken, any.jwToken );
    localStorage.setItem( this.localStorageKeys.id, String(any.id) );
    localStorage.setItem( this.localStorageKeys.userName, `${any.userName}` );
    localStorage.setItem( this.localStorageKeys.roles, JSON.stringify(any.roles) );
    localStorage.setItem( this.localStorageKeys.isVerified, `${any.isVerified}` );
    // save user data on the app instance
    this.userData = {
      jwToken: any.jwToken,
      isVerified: any.isVerified,
      id: any.id,
      userName: `${any.userName}`,
      email: any.email,
      roles: any.roles
    };
    // change authentication status
    this.loggedIn.next(true);
  }

  /**
   * remove user data from browser storage and from the app instance and change the status of the authentication
   */
  removeUserData(): void{
    // remove user data from localstorage
    this.removeSavedUserDataFromBrowser()
    // remove user data from the app instance
    this.userData = null;
    // change authentication status
    this.loggedIn.next(false);
  }
  /**
   * removed all saved user data - on localstorageKeys - from browser
   */
  removeSavedUserDataFromBrowser(){
    let keys = Object.values(this.localStorageKeys)
    keys.forEach((key)=>{
      localStorage.removeItem(key);
    })
  }

  /**
   *  check if there a user data saved on localstorage or not
   */
  readUserDataFromLocalStorage(){
    const jwToken = localStorage.getItem(this.localStorageKeys.jwToken)
    const id = localStorage.getItem(this.localStorageKeys.id)
    const userName = localStorage.getItem(this.localStorageKeys.userName)
    const roles = JSON.parse(localStorage.getItem(this.localStorageKeys.roles))
    const email = localStorage.getItem(this.localStorageKeys.email)
    const isVerified = Boolean(localStorage.getItem(this.localStorageKeys.isVerified))

    if ( jwToken && roles && roles.length && id && userName ) this.userData = { jwToken, id, isVerified, userName , roles, email }
    else this.userData = null;
  }

  /**
   *called once on the constructor of auth guard as it's the first thing initialized
   It get all the user data on local storage if there are one and save them in the app instance
  */
  checkForUserExistance(): void {
    if (!this.firstLoad) return ; // flag to make it single ton func that invoked one time only when first called
    this.readUserDataFromLocalStorage(); //check for user data existance on browser storage
    const userStatus = this.userData ? !!this.userData.jwToken && !!this.userData.id && !!this.userData.userName : false; // get the auth status
    if(this.loggedIn)  this.loggedIn.next(userStatus)
    else {
      this.loggedIn = new BehaviorSubject(userStatus)
    }
    this.loggedIn$ = this.loggedIn.asObservable();
    this.firstLoad = false; // the flag that make this func singleton one
  }

  // Setter and getter for the userdata Behavior subject
  get userData(): any { return this._userData.value; }
  set userData(userData:any){
    if(this._userData)  this._userData.next(userData)
    else {
      this._userData = new BehaviorSubject(userData)
      this.userData$ = this._userData.asObservable();
    }
  }

  /**
  * remove user data and redirect to login page
  */
  logout(): void{
    this.removeUserData();
    this.navigateToDefaultRoute()
  }

  navigateToDefaultRoute(route?:string){
    // this.loggedIn = true//workaround solution for  service issue - not a big problem as this function will be invoked only after succes login
    // problem is when you try to login after logout the gaurd doesn't read the changes in auth service imediately you need to press login agian
    // it seems it take the one before last change
    // private route: ActivatedRoute,
    // this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
    if( this.returnUrl ) this.router.navigate([this.returnUrl])
    else this.router.navigate([route || '/login'])
  }
}
