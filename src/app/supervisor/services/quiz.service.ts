import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { baseUrl } from 'src/environments/config';
const Quizes = [
  {
    Id:"12525",
    level:"A1.1",
    lessonDefinition:"2",
    group:"2",
    questionsCount:4,
    TestDuration:15
  }
]

@Injectable()
export class QuizService {
  prefix = 'Quiz';
  constructor(private http: HttpClient) {}
  getAllQuizes(): Observable<any[]> {
    return of(Quizes)
    return this.http.get<any[]>(
      `${baseUrl}/${this.prefix}/getAll`
    );
  }
  deleteQuiz(id:number) : Observable<boolean> {
    return of(true);
    // return this.http.get<any[]>(
    //   `${baseUrl}/${this.prefix}/getAll`
    // );
  }
}
