import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-question',
  templateUrl: './create-question.component.html',
  styleUrls: ['./create-question.component.less'],
})
export class CreateQuestionComponent implements OnInit {
  questionTypes: any[];
  constructor() {
    this.questionTypes = [
      { name: 'Multiple choice', value: 'Multiple choice' },
      { name: 'single choice', value: 'single choice' },
    ];
  }

  ngOnInit(): void {}
}
