import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertService, AuthService } from 'src/app/core/services';
import { User } from 'src/app/shared/models/user.model';
import { HomeWorkSubmissionForStudent } from 'src/app/student/components/homework/models/HomeWorkSubmissionForStudent';
import { HomeWorkSubmission } from 'src/app/teacher/models/homework-submissions.model';
import { StudentHomeworkService } from '../../services/student-homework.service';

@Component({
  selector: 'app-homework-details',
  templateUrl: './homework-details.component.html',
  styleUrls: ['./homework-details.component.less'],
})
export class HomeworkDetailsComponent implements OnInit {
  goodScore: boolean;
  homeworkInstance: HomeWorkSubmission = new HomeWorkSubmission();
  homeworkId: string;
  userData: User;
  homeWorkSubmission: HomeWorkSubmissionForStudent = new HomeWorkSubmissionForStudent();
  constructor(
    private studentHomeworkService: StudentHomeworkService,
    private authService: AuthService,
    private alertService: AlertService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.authService.userData$.subscribe((res) => {
      this.userData = res;
    });
    this.getHomeworkId();
    this.gitHomeworkInstancesById();
  }

  getHomeworkId() {
    this.homeworkId = this.activatedRoute.snapshot.params['homework_ID'];
  }
  gitHomeworkInstancesById(): void {
    this.studentHomeworkService
      .GetHomeworkSubmitionById(this.homeworkId)
      .subscribe((data) => {
        this.homeworkInstance = data;
        this.homeWorkSubmission.text = this.homeworkInstance.text;
      });
  }

  submitHomeWork(status) {
    debugger
    if (!this.homeWorkSubmission.text)
      return this.alertService.newAlert(
        'error',
        'Please Write you answer first'
      );
    this.homeWorkSubmission.studentId = this.userData.id;
    this.homeWorkSubmission.id = this.homeworkInstance.id;
    if (status === 1) {
      //save status
      this.homeWorkSubmission.status = 1;
    } else {
      this.homeWorkSubmission.status = 2;
    }
    this.studentHomeworkService
      .SubmitHomeWorkForStudent(this.homeWorkSubmission)
      .subscribe((data) => {
        console.log('this.homeWorkSubmission', this.homeWorkSubmission);
        this.alertService.newAlert(
          'success',
          'Homework submitted successfully'
        );
        this.router.navigate(['student/homework']);
      });
  }
}
