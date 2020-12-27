import { Component, OnInit } from '@angular/core';
import { DialogService } from 'primeng/dynamicdialog';
import { AuthService } from 'src/app/core/services';
import { LessonInstance } from '../models/lessonInstances.model';
import { TeacherService } from '../services/teacher.service';
import { LessonsReportComponent } from './lessons-report/lessons-report.component';


@Component({
  selector: 'app-lessons',
  templateUrl: './lessons.component.html',
  styleUrls: ['./lessons.component.less'],
  providers:[TeacherService]
})
export class LessonsComponent implements OnInit {
  lessons  : LessonInstance [] = []
  userId : number
  now = new Date()
  levels :[{label:string , value : any}] = [{label:"Level" , value : ''}]
  groupInstances :{label:string , value : any}[] = [{label:"Group Instance" , value : ''}]
  selectedLevel
  selectedGroupInstance
  constructor(
    private dialogService: DialogService,
    private teacherService:TeacherService,
    private authService:AuthService
    ) {

     }

  ngOnInit(): void {
    this.authService.userData$.subscribe((userData)=>{
      this.userId = userData.id
      this.getTeacherGroupInstances()
    })
  }
  show(lesson) {
    this.dialogService.open(LessonsReportComponent, {
      showHeader: false,
      width:'80%',
      data:{lesson}
    }).onClose.subscribe(res => {
      if (res) this.getAllLessons({ value: lesson.groupInstance.id});
    })
  }
  getTeacherGroupInstances(){
    this.teacherService.getAllGroupInstancesByTeacherId(this.userId)
    .subscribe((res)=>{
      res.data.forEach((elem)=>{
        this.groupInstances.push({value:elem.groupInstanceId,label:"Group Instance "+elem.groupInstanceId})
      })
    })
  }
  getAllLessons($event){
     if(!$event.value) return this.lessons = []
    this.teacherService.getAllLessonInstancesByGroupInstance($event.value)
    .subscribe((res)=>{
      this.lessons = res.data
      console.log(this.lessons)
    })
  }

}
