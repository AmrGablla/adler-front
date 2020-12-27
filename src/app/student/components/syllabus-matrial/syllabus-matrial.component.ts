import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-syllabus-matrial',
  templateUrl: './syllabus-matrial.component.html',
  styleUrls: ['./syllabus-matrial.component.less'],
})
export class SyllabusMatrialComponent implements OnInit {
  groupInstances = new Array(6)
  constructor() {}

  ngOnInit(): void {
    this.groupInstances.fill('data');
  }
}
