
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/core/services';
import { HomeworkItem, HomeworkSubmition } from '../../models/homework-list.model';
import { TeacherService } from '../../services/teacher.service';
@Component({
    selector: 'correct-homework',
    templateUrl: './correct-homework.component.html',
    styleUrls: ['./correct-homework.component.less']
})
export class CorrectHomeworkComponent implements OnInit {
    homeworkId: number;
    homeworkdetails: HomeworkItem;
    studentAnswer = ``
    teacherCorrection: string;
    teacherId: string;
    homeworkSubmition: HomeworkSubmition;
    earnedPoints : number = 0;
    constructor(
        private teacherService: TeacherService,
        private activatedRoute: ActivatedRoute,
        private authService: AuthService) {
        this.activatedRoute.queryParams.subscribe(params => {
            this.homeworkId = params['homeworkId'];
        });
    }
    ngOnInit(): void {
        this.teacherService.getHomeworkById(this.homeworkId).subscribe(res => {
            this.homeworkdetails = res;
            if (this.homeworkdetails) {
                this.studentAnswer = this.homeworkdetails.text;
                this.teacherCorrection = this.homeworkdetails.text;
            }
        });
        this.authService.userData$.subscribe(res => {
            this.teacherId = res.id;
        })
    }
    getHomeWorkSubmitionObject(solution) {
        this.homeworkSubmition = {
            id:this.homeworkId,
            solution:solution,
            correctionTeacherId:this.teacherId,
            points:this.earnedPoints
        }
        this.submitHomeworkCorrection(this.homeworkSubmition);
    }
    submitHomeworkCorrection(homework: HomeworkSubmition) {
        this.teacherService.submitHomeworkCorrection(homework).subscribe(res => {
            console.log(res);
        });
    }
}
