import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeworkListComponent } from './homework-list/homework-list.component';
import { LessonsComponent } from './lessons/lessons.component';
import { TeacherComponent } from './teacher.component';
const routes: Routes = [
  {
    path: '',
    component: TeacherComponent,
    children: [
      { path: '', redirectTo: 'lessons', pathMatch: 'full' },
      {
        path: 'lessons',
        loadChildren: () =>
          import('./lessons/lessons.module').then(
            (m) => m.LessonsModule
          ),
      },
      {
        path: 'homework-list',
        loadChildren: () =>
          import('./homework-list/homework-list.module').then(
            (m) => m.HomeworkListModule
          ),
      },]
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeacherRoutingModule { }
