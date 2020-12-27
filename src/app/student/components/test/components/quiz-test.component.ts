import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quiz-test',
  templateUrl: './quiz-test.component.html',
  styleUrls: ['./quiz-test.component.less']
})
export class QuizTestComponent implements OnInit {
  quizInstances = new Array(6).fill(0);

  constructor() { }

  ngOnInit(): void {
  }

}
