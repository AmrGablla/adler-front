import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-table',
  templateUrl: './test-table.component.html',
  styleUrls: ['./test-table.component.less']
})
export class TestTableComponent implements OnInit {
  testsList: [];
  // testsList
  selectedTest: Array<any>;
  // TestRequest
  constructor() { }

  ngOnInit(): void {
  }

}
