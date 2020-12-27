
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeworkRoutingModule } from './homework-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { HomeworkComponent } from './components/homework/homework.component';
import { HomeworkDetailsComponent } from './components/homework-details/homework-details.component';
@NgModule({
  declarations: [
    HomeworkComponent,
    HomeworkDetailsComponent
  ],
  imports: [
    CommonModule, 
    HomeworkRoutingModule, 
    SharedModule],
})
export class HomeworkModule {}
