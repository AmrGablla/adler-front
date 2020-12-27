import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-quiz',
  templateUrl: './create-quiz.component.html',
  styleUrls: ['./create-quiz.component.less'],
})
export class CreateQuizComponent implements OnInit {
  level: any[];
  group: any[];
  lesson: any[];
  submittedWithin: any[];

  questionsList: [];
  // testsList
  selectedQuestion: Array<any>;
  // TestRequest

  constructor() {}

  ngOnInit(): void {}
}
