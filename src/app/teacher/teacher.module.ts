import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LessonsComponent } from './lessons/lessons.component';
import { TeacherRoutingModule } from './teacher.routing.module';
import { HomeworkListComponent } from './homework-list/homework-list.component';
import { DialogService } from 'primeng/dynamicdialog';
import { SharedModule } from '../shared/shared.module';
import { TeacherComponent } from './teacher.component';
import { TeacherService } from './services/teacher.service';


@NgModule({
  declarations: [
    LessonsComponent,
    HomeworkListComponent,
    TeacherComponent
  ],
  imports: [
    CommonModule,
    TeacherRoutingModule,
    SharedModule
  ],
  providers: [DialogService, TeacherService]
})
export class TeacherModule { }
