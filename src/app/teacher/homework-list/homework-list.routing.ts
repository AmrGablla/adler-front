
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CorrectHomeworkComponent } from './correct-homework/correct-homework.component';
import { HomeworkListComponent } from './homework-list.component';

const routes: Routes = [
    {
        path: '',
        component: HomeworkListComponent
    },
    {
        path: 'correct-homework',
        component: CorrectHomeworkComponent
    },


];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class HomeworkListRoutingModule { }