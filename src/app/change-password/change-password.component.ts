import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertService } from '../core/services';
import { ChangePasswordModel } from './models/change-password.model';
import { ChangePasswordService } from './services/change-password.service';
@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./change-password.component.less']
})
export class ChangePasswordComponent implements OnInit {
  showPassword = false;
  showConfirmPassword = false;
  showOldPassword = false;
  changePasswordRequest: ChangePasswordModel = new ChangePasswordModel();
  constructor(
    private alertService: AlertService,
    private changePasswordService: ChangePasswordService,
    private router: Router ) { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm): void {
    if (form.invalid) {
      form.form.markAllAsTouched();
      return this.alertService.newAlert('error', 'Please make sure that two passwords are matched');
    }
    this.changePasswordService.changePassword(this.changePasswordRequest).subscribe(res => {
      this.alertService.newAlert('success', 'Password Changed successfully');
      this.router.navigate(['/home']);
    });
  }

}
