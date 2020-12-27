import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../models/user.model';
@Component({
  selector: 'switch-list',
  templateUrl: './switch-list.component.html',
  styleUrls: ['./switch-list.component.less']
})
export class SwitchListComponent implements OnInit {
  @Input() title: string;
  @Input() leftSideTitle: string;
  @Input() students: User[] = [];
  @Input() switchedStudents: User[] = [];
  @Output() getSwitched: EventEmitter<User[]> = new EventEmitter();
  absentsIds = [];
  missedIds = [];
  constructor() { }

  ngOnInit(): void {}

  switch(e, index) {
    switch (e) {
      case 'switched':
        let student = JSON.parse(JSON.stringify(this.students[index]));
        this.students.splice(index, 1);
        this.switchedStudents.push(student);
        this.absentsIds.push(student.studentId + '?' + student.id);
        this.getSwitched.emit(this.absentsIds);
        break;
      case 'backToMain':
        let switchedStudent = JSON.parse(JSON.stringify(this.switchedStudents[index]));
        this.switchedStudents.splice(index, 1);
        this.students.push(switchedStudent);
        this.missedIds.push(switchedStudent.studentId + '?' + switchedStudent.id);
        this.getSwitched.emit(this.missedIds);
        break;
      default:
        break;
    }
  }

}
