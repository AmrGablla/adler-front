import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../../shared/shared.module';

import { TestRoutingModule } from './test-routing.module';
import { CreateQuestionComponent } from './components/create-question.component';
import { ViewQuestionsComponent } from './components/view-questions.component';
import { CreateQuizComponent } from './components/create-quiz.component';
import { TestTableComponent } from './components/test-table.component';

@NgModule({
  declarations: [
    CreateQuestionComponent,
    ViewQuestionsComponent,
    CreateQuizComponent,
    TestTableComponent,
  ],
  imports: [CommonModule, TestRoutingModule, SharedModule],
})
export class TestModule {}
