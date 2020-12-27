import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { CorrectHomeworkComponent } from './correct-homework/correct-homework.component';
import { HomeworkListRoutingModule } from './homework-list.routing';


@NgModule({
    declarations: [
        CorrectHomeworkComponent
    ],
    imports: [
        CommonModule,
        HomeworkListRoutingModule,
        SharedModule
    ]
})
export class HomeworkListModule { }
