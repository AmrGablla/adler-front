import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DynamicDialogConfig, DynamicDialogRef } from 'primeng/dynamicdialog';
import { Student } from 'src/app/shared/models/user.model';
import { AdditionalHomework, LessonInstanceStudent, LessonReport } from './models/lesson-report.model';
import { TeacherService } from '../../services/teacher.service';
import { AlertService } from 'src/app/core/services';
@Component({
  selector: 'app-lessons-report',
  templateUrl: './lessons-report.component.html',
  styleUrls: ['./lessons-report.component.less']
})
export class LessonsReportComponent implements OnInit {
  form: FormGroup;
  additionalHomework = false;
  lessonInstanceStudents: LessonInstanceStudent[] = [];
  absents = [];
  missedHomework = [];
  studentsIds: string[] = [];
  students: Student[] = [];
  clonedStudents: Student[] = [];
  showBonus = false;
  btnClicked = false;
  private lessonReport: LessonReport = new Object() as LessonReport;
  constructor(
    private formBuilder: FormBuilder,
    public activeModal: DynamicDialogRef,
    private teacherService: TeacherService,
    public config: DynamicDialogConfig,
    private alertService: AlertService) { }

  ngOnInit(): void {
    this.loadForm();
    this.teacherService.getLessonReportStudents(this.config.data.lesson.id).subscribe(res => {
      this.students = res.data;
      this.clonedStudents = JSON.parse(JSON.stringify(this.students));
    });
    
  }
  loadForm() {
    this.form = this.formBuilder.group({
      lessonDoneField: '',
      toDoField: '',
      additionalHomeworkField: false,
      questionTextField: '',
      minCharsField: '',
      pointsField: '',
      bonusPointsField: ''
    });
  }
  getAbsents(students) {
    this.absents = [];
    for (let student of students) {
      this.absents.push(student);
    }
  }
  getMissedHomework(students) {
    this.missedHomework = [];
    for (let student of students) {
      this.missedHomework.push(student);
    }
  }

  getLessonInstanceStudents() {
    this.studentsIds = [];
    this.lessonInstanceStudents = [];
    for (let student of this.absents) {
      this.studentsIds.push(student);
    }
    for (let student of this.missedHomework) {
      this.studentsIds.push(student);
    }
    let unique = [...new Set(this.studentsIds)];

    for (let id of unique) {
      let studentId = id.split('?')[0];
      let mainId = id.split("?").pop(); 
      if (this.absents.includes(id) && this.missedHomework.includes(id)) {
        this.lessonInstanceStudents.push({ studentId: studentId, id:mainId , lessonInstanceId: this.config.data.lesson.id, attend: false, homework: false });
      } else if (this.absents.includes(id) && !this.missedHomework.includes(id)) {
        this.lessonInstanceStudents.push({ studentId: studentId, id:mainId , lessonInstanceId: this.config.data.lesson.id, attend: false, homework: true });
      } else {
        this.lessonInstanceStudents.push({ studentId: studentId, id:mainId , lessonInstanceId: this.config.data.lesson.id, attend: true, homework: false });
      }
    }
  }
  toggleAdditionalHomework(e) {
    this.additionalHomework = e;
  }

  createReport() {
    if (this.btnClicked) {
      this.lessonReport.id = this.config.data.lesson.id;
      this.lessonReport.materialDone = this.form.controls.lessonDoneField.value;
      this.lessonReport.materialToDo = this.form.controls.toDoField.value;
      this.lessonReport.isAdditionalHomework = this.form.controls.additionalHomeworkField.value;
      this.getLessonInstanceStudents();
      this.lessonReport.lessonInstanceStudent = this.lessonInstanceStudents;
      if (this.lessonReport.isAdditionalHomework) {
        this.lessonReport.additionalHomework = new Object() as AdditionalHomework;
        this.lessonReport.additionalHomework.text = this.form.controls.questionTextField.value;
        this.lessonReport.additionalHomework.minCharacters = this.form.controls.minCharsField.value;
        this.lessonReport.additionalHomework.points = this.form.controls.pointsField.value;
        this.lessonReport.additionalHomework.bonusPoints =
          this.form.controls.bonusPointsField.value ? this.form.controls.bonusPointsField.value : 0;
        // this.lessonReport.additionalHomework.groupInstanceId = this.additionalHomework.groupInstanceId
      }
      this.teacherService.submitLessonReport(this.lessonReport).subscribe(res => {
        this.alertService.newAlert('success', 'Report Created Successfully');
        this.close(true);
      })
    }
    this.btnClicked = false;
    
  }
  clicked() {
    this.btnClicked = true;
  }
  close(status?:boolean) {
    this.activeModal.close(status);
  }
}
