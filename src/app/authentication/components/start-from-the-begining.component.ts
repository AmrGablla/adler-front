import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertService } from '../../core/services';
import { RegisterDataService } from '../services/register-data.service';

@Component({
  selector: 'app-start-from-the-begining',
  templateUrl: './start-from-the-begining.component.html',
  styleUrls: ['./start-from-the-begining.component.less']
})
export class StartFromTheBeginingComponent implements OnInit {
  agreeToPolicy: boolean;
  groupInstances;
  now = new Date();
  constructor(
    private authDataSrvc: RegisterDataService,
    private router: Router,
    private alertService: AlertService) { }

  ngOnInit(): any {
    if (!this.authDataSrvc.registerData) {
      return this.router.navigate(['/register/personal-info']);
    }
    this.authDataSrvc.getAllGroupInstances().subscribe((res) => {
      this.groupInstances = res.data;
    });
  }
  selectInstance(id): void {
    this.authDataSrvc.registerData.groupInstanceId = id;
  }
  submit(): void {
    if (this.agreeToPolicy) {
      if (this.authDataSrvc.registerData.groupInstanceId) {
        this.authDataSrvc.register(this.authDataSrvc.registerData).subscribe((res) => {
          this.router.navigate(['/login']);
        });
      }
    } else {
      this.alertService.newAlert('error', 'You must agree to policy');
    }
  }

}
