import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LessonsReportComponent } from './lessons-report/lessons-report.component';
import { LessonsComponent } from './lessons.component';

const routes: Routes = [
    {
        path: '',
        component: LessonsComponent
    },
    {
        path: 'lesson-report',
        component: LessonsReportComponent
    },


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
  })
export class LessonsRoutingModule {}