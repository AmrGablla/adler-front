import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { LessonsReportComponent } from './lessons-report/lessons-report.component';
import { LessonsRoutingModule } from './lessons.routing.module';

@NgModule({
    declarations: [
      LessonsReportComponent, 
    ],
    imports: [
      CommonModule,
      LessonsRoutingModule,
      SharedModule
    ]
  })
export class LessonsModule {}