import { HomeworkDetailsComponent } from './components/homework-details/homework-details.component';
import { HomeworkComponent } from './components/homework/homework.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  { path: '', component: HomeworkComponent },
  {
    path: 'details/:homework_ID',
    component: HomeworkDetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule],
  exports: [RouterModule],
})
export class HomeworkRoutingModule {}
