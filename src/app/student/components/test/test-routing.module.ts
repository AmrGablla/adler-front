import { FinalTestComponent } from './components/final-test.component';
import { QuizTestComponent } from './components/quiz-test.component';
import { SublevelTestComponent } from './components/sublevel-test.component';
import { TestComponent } from './components/test.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
const routes: Routes = [
  {
    path: '',
    component: TestComponent,
    children: [
      { path: '', redirectTo: 'quiz-test', pathMatch: 'full' },
      { path: 'quiz-test', component: QuizTestComponent },
      { path: 'sublevel-test', component: SublevelTestComponent },
      { path: 'final-test', component: FinalTestComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestRoutingModule {}
