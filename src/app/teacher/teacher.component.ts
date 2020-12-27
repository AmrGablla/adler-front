import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
@Component({
  selector: 'teacher',
  templateUrl: './teacher.component.html',
  styleUrls: ['./teacher.component.less'],
})
export class TeacherComponent {
    title = 'Lessons';
    currentRoute: string;

    constructor(private router: Router) {
        this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(res => {
            switch ((res as any).url.substr(0, (res as any).url.lastIndexOf("?"))) {
                case '/teacher/lessons':
                    this.title = 'Lessons';
                    break;
                case '/teacher/homework-list':
                    this.title = 'Homework';
                    break;
                case '/teacher/test':
                    this.title = 'Tests';
                    break;
                case '/teacher/homework-list/correct-homework':
                    this.title = 'Homework Correction'
                default:
                    break;
            }
        });
    }
}
