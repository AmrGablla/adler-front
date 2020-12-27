import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from 'src/app/core/services';
import { RegisterDataService } from '../services/register-data.service';

@Component({
  selector: 'app-register-main',
  templateUrl: './register-main.component.html',
  styleUrls: ['./register-main.component.less']
})
export class RegisterMainComponent implements OnInit {
  havePromo: boolean;
  promoCode = '';
  validPromoCode: boolean;
  promoBlur = false;
  constructor(
    private authDataSrvc: RegisterDataService,
    private alertService: AlertService,
    private router: Router) { }
  validatePromoCode(promoCode): void {
    this.authDataSrvc.checkPromoCode(promoCode).subscribe((res) => {
      this.validPromoCode = res.data;
      this.promoBlur = true;
    });
  }
  continue(): void {
    if (this.havePromo && !this.validPromoCode) {
      return this.alertService.newAlert('error', 'Please enter valid Promo code');
    }
    this.router.navigate(['/register/start-from-the-begining']);
  }
  ngOnInit(): any {
    if (!this.authDataSrvc.registerData) {
      return this.router.navigate(['/register/personal-info']);
    }
  }

}
