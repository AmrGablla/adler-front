import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoggedInGuard } from '../core/services/guards/logged-in/logged-in.guard';
import { AuthLayoutComponent } from './components/auth-layout.component';
import { LoginComponent } from './components/login.component';
import { RegisterFormComponent } from './components/register-form.component';
import { RegisterMainComponent } from './components/register-main.component';
import { RegisterStepsLayoutComponent } from './components/register-steps-layout.component';
import { StartFromTheBeginingComponent } from './components/start-from-the-begining.component';

const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    children: [
      { path: 'login', component: LoginComponent },
      {
        path: 'register',
        component:RegisterStepsLayoutComponent,
        children: [
          { path: '', redirectTo : 'personal-info' },
          { path: 'personal-info', component: RegisterFormComponent },
          {
            path: 'path-selection',
            component: RegisterMainComponent,
          },
          {
            path: 'start-from-the-begining',
            component: StartFromTheBeginingComponent,
          },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {}
