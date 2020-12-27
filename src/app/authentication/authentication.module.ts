import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { LoginComponent } from './components/login.component';
import { RegisterFormComponent } from './components/register-form.component';
import { AuthLayoutComponent } from './components/auth-layout.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { RegisterMainComponent } from './components/register-main.component';
import { StartFromTheBeginingComponent } from './components/start-from-the-begining.component';
import { RegisterStepsLayoutComponent } from './components/register-steps-layout.component';
import { SharedModule } from '../shared/shared.module';
import { AuthenticationApiService } from './services/authentication-api.service';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterFormComponent,
    AuthLayoutComponent,
    RegisterMainComponent,
    StartFromTheBeginingComponent,
    RegisterStepsLayoutComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AuthenticationRoutingModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [AuthenticationApiService]
})
export class AuthenticationModule {}
