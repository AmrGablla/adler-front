import { QuizContentComponent } from './quiz-content/quiz-content.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard, LoggedInGuard } from './core/services';
import { Roles } from './shared/models/roles.model';
const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
    canActivate: [LoggedInGuard],
  },
  {
    path: 'change-password',
    loadChildren: () =>
      import('./change-password/change-password.module').then(
        (m) => m.ChangePasswordModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./users/users.module').then((m) => m.UsersModule),
    canActivate: [AuthGuard],
    // data: { roles: [Roles.Supervisor, Roles.SuperAdmin] }
  },
  {
    path: 'student',
    loadChildren: () =>
      import('./student/student.module').then((m) => m.StudentModule),
    canActivate: [AuthGuard],
    data: { roles: [Roles.Student] },
  },
  {
    path: 'supervisor',
    loadChildren: () =>
      import('./supervisor/supervisor.module').then((m) => m.SupervisorModule),
    canActivate: [AuthGuard],
  },
  {
    path: 'teacher',
    loadChildren: () =>
      import('./teacher/teacher.module').then((m) => m.TeacherModule),
    canActivate: [AuthGuard],
    data: { roles: [Roles.Teacher] },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
