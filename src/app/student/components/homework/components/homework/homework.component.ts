import { AlertService } from './../../../../../core/services/alert/alert.service';
import { StudentHomeworkService } from '../../services/student-homework.service';
import { HomeWorkSubmission } from 'src/app/teacher/models/homework-submissions.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-homework',
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.less'],
})
export class HomeworkComponent implements OnInit {
  goodScore: boolean;
  homeworkInstances: HomeWorkSubmission = new HomeWorkSubmission();
  constructor(
    private studentHomeworkService: StudentHomeworkService,
    private alertService: AlertService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.gitHomeworkInstances();
  }
  gitHomeworkInstances(): void {
    this.studentHomeworkService.GetHomeworkForStudent().subscribe((data) => {
      if (!data.length) {
        this.alertService.newAlert('error', 'No Homework found');
        return this.router.navigate(['student/homework']);
      }
      this.homeworkInstances = data; 
    });
  }
  redirectToHomesubmtion(homeworkInstance: HomeWorkSubmission) {
    debugger
    if (homeworkInstance.status == 'Draft' || homeworkInstance.status == 'Pending') {
      this.router.navigate(['student/homework/details', homeworkInstance.id]);
    }
  }
}
