import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterDataService } from '../services/register-data.service';

@Component({
  selector: 'app-register-steps-layout',
  templateUrl: './register-steps-layout.component.html',
  styleUrls: ['./register-steps-layout.component.less']
})
export class RegisterStepsLayoutComponent {

  constructor(
    private regDataService: RegisterDataService,
    private router: Router) { }

  pathSelection(): any {
    if (!this.regDataService.registerData) {
      return;
    }
    this.router.navigate(['/register/path-selection']);
  }
}
