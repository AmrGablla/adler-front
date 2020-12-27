import { HomeworkComponent } from './components/homework/homework.component';
import { DiverseComponent } from './components/diverse/diverse.component';
import { UsersComponent } from '../users/components/users/users.component';
import { TestComponent } from './components/test/test.component';
import { SupervisorComponent } from './supervisor.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizListComponent } from './components/quiz-list/quiz-list.component';
import { CreateQuestionComponent } from './components/create-question/create-question.component';

const routes: Routes = [
  {
    path: '',
    component: SupervisorComponent,
    children: [
      { path: '', redirectTo: 'users', pathMatch: 'full' },
      { path: 'users', component: UsersComponent },
      { path: 'quiz', component: QuizListComponent },
      { path: 'homeworks', component: HomeworkComponent },
      { path: 'create-question', component: CreateQuestionComponent},
      // {
      //   path: 'test',
      //   loadChildren: () =>
      //     import('./components/test/test.module').then((m) => m.TestModule),
      // },
      { path: 'diverse', component: DiverseComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SupervisorRoutingModule {}
