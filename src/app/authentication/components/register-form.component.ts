import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import { AlertService } from '../../core/services';
import { RegisterRequest } from '../models/register-request.model';
import { RegisterDataService } from '../services/register-data.service';
@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.less'],
})
export class RegisterFormComponent implements OnInit {
  user: RegisterRequest = new RegisterRequest();
  showConfirmPassword: boolean;
  showPassword: boolean;
  constructor(
    private authDataSrvc: RegisterDataService,
    private alertSrvc: AlertService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (this.authDataSrvc.registerData) {
      this.user.firstName = this.authDataSrvc.registerData.firstName;
      this.user.lastName = this.authDataSrvc.registerData.lastName;
      this.user.userName = this.authDataSrvc.registerData.userName;
      this.user.email = this.authDataSrvc.registerData.email;
      this.user.phone = this.authDataSrvc.registerData.phone;
      this.user.dateOfBirth = this.authDataSrvc.registerData.dateOfBirth;
      this.user.country = this.authDataSrvc.registerData.country;
    }
  }
  onSubmit(form: NgForm): any {
    if (form.invalid) {
      form.form.markAllAsTouched();
      if (form.form.controls.confirmPassword.status == 'INVALID') {
        return this.alertSrvc.newAlert('error', "Passwords didn't match");
      }
      return this.alertSrvc.newAlert(
        'error',
        'Please complete all the required fields'
      );
    }
    this.authDataSrvc.registerData = Object.assign(
      new RegisterRequest(),
      JSON.parse(JSON.stringify(form.value))
    );
    this.router.navigate(['/register/path-selection']);
  }
}
