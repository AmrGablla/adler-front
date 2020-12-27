import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestComponent } from './components/test.component';
import { QuizTestComponent } from './components/quiz-test.component';
import { TestRoutingModule } from './test-routing.module';
import { SublevelTestComponent } from './components/sublevel-test.component';
import { FinalTestComponent } from './components/final-test.component';

@NgModule({
  declarations: [
    TestComponent,
    QuizTestComponent,
    SublevelTestComponent,
    FinalTestComponent,
  ],
  imports: [CommonModule, TestRoutingModule],
})
export class TestModule {}
