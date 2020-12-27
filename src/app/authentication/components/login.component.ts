import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from '../../core/services/alert/alert.service';
import { AuthService } from '../../core/services/auth/auth.service';
import { LoginRequest } from '../models';
import { AuthenticationApiService } from '../services/authentication-api.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent {
  user: LoginRequest = new LoginRequest();
  constructor(
    private authenticationApiService: AuthenticationApiService,
    private alertService: AlertService,
    private router: Router,
    private authService: AuthService) { }

  onSubmit(form: NgForm): void {
    if (form.invalid) {
      form.form.markAllAsTouched();
      return this.alertService.newAlert('error', 'Please enter your email and password');
    }
    this.authenticationApiService.login(this.user).subscribe((res) => {
      this.alertService.newAlert('success', 'Logged in successfully');
      this.authService.saveUserData(res.data);
      if (res.data.changePassword) {
        this.router.navigate(['/change-password']);
         return this.alertService.newAlert('info', 'Please it\'s extremely recommended to change your password for security reasons.');
      }
      this.router.navigate(['/home']);
    }
    );
  }

}
