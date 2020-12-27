
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TeacherService } from '../services/teacher.service';
import { HomeworkItem } from '../models/homework-list.model';
@Component({
    selector: 'homework-list',
    templateUrl: './homework-list.component.html',
    styleUrls: ['./homework-list.component.less']
})
export class HomeworkListComponent implements OnInit {
    homeworkList: HomeworkItem[];
    constructor(
        private router:Router,
        private teacherService: TeacherService){ }
    ngOnInit() : void{
        this.teacherService.getHomeworkSubmitions().subscribe(res => {
            this.homeworkList = res;
        });
    }


    correctHomework(homeworkId) {
        this.router.navigate(['/teacher/homework-list/correct-homework'], { queryParams: {homeworkId}})
    }
}