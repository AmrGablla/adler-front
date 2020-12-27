import { BehaviorSubject } from 'rxjs';
import { Injectable } from '@angular/core';
import { setTime } from 'ngx-bootstrap/chronos/utils/date-setters';

@Injectable()
export class LoaderService {
  _showLoader = false; // trigger loader flag
  showLoaderSub = new BehaviorSubject(false) // trigger loader flag as observable
  showLoader$ = this.showLoaderSub.asObservable()
  constructor() {}

  //getter and setter for show loader
  get showLoader(){
    return this._showLoader
  }
  set showLoader(value){
    this._showLoader = value
    this.showLoaderSub.next(value)
  }
  show() {
    setTimeout(() => this.showLoader = true, 0);
  }

  hide() {
    setTimeout(() => this.showLoader = false, 0);
  }
}
