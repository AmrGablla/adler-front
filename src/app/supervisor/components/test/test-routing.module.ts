import { TestComponent } from './test.component';
import { TestTableComponent } from './components/test-table.component';
import { CreateQuizComponent } from './components/create-quiz.component';
import { ViewQuestionsComponent } from './components/view-questions.component';
import { CreateQuestionComponent } from './components/create-question.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: TestComponent,
    children: [
      { path: '', redirectTo: 'test-table', pathMatch: 'full' },
      { path: 'test-table', component: TestTableComponent },
      { path: 'create-question', component: CreateQuestionComponent },
      { path: 'view-questions', component: ViewQuestionsComponent },
      { path: 'create-quiz', component: CreateQuizComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestRoutingModule {}
