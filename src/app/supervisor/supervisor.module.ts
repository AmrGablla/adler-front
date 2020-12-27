import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';

import { SupervisorRoutingModule } from './supervisor-routing.module';
import { DiverseComponent } from './components/diverse/diverse.component';
import { HomeworkComponent } from './components/homework/homework.component';
import { UsersService } from '../users/services/users.service';
import { TestComponent } from './components/test/test.component';
import { QuizListComponent } from './components/quiz-list/quiz-list.component';
import { QuizService } from './services/quiz.service';
import { SupervisorHomeworkService } from './services/supervisor-homework.service';
import { CreateQuestionComponent } from './components/create-question/create-question.component';
import { QuestionService } from './services/question.service';

@NgModule({
  declarations: [
    DiverseComponent, 
    HomeworkComponent, 
    QuizListComponent,
    TestComponent,
    CreateQuestionComponent],
  providers: [
    UsersService,
    QuizService,
    SupervisorHomeworkService,
    QuestionService],
  imports: [CommonModule, SupervisorRoutingModule, SharedModule],
})
export class SupervisorModule {}
