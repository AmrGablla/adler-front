import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRoutingModule } from './student-routing.module';
import { ProgressComponent } from './components/progress/progress.component';
import { SharedModule } from '../shared/shared.module';
import { SyllabusMatrialComponent } from './components/syllabus-matrial/syllabus-matrial.component';

@NgModule({
  declarations: [
    ProgressComponent,
    SyllabusMatrialComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    SharedModule
  ],
})
export class StudentModule {}
