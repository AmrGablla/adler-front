import { SyllabusMatrialComponent } from './components/syllabus-matrial/syllabus-matrial.component';
import { ProgressComponent } from './components/progress/progress.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ProgressComponent,
    children: [
      { path: '', redirectTo: 'syllabus-material', pathMatch: 'full' },
      { path: 'syllabus-material', component: SyllabusMatrialComponent },
      {
        path: 'homework',
        loadChildren: () =>
          import('./components/homework/homework.module').then(
            (m) => m.HomeworkModule
          ),
      },
      {
        path: 'test',
        loadChildren: () =>
          import('./components/test/test.module').then((m) => m.TestModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentRoutingModule {}
