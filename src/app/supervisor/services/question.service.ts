import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from './../../shared/models/api-response.model';
import { baseUrl } from '../../../environments/config';
import { Observable } from 'rxjs';
import { CreateQuestionRequest } from '../models/create-question-request.model';

@Injectable()
export class QuestionService {
  prefix = 'SingleQuestion';
  constructor(private http: HttpClient) {}
  createSingleQuestion(createQuestionRequest: CreateQuestionRequest): Observable<any> {
    return this.http.post<ApiResponse>(`${baseUrl}${this.prefix}/Create`, createQuestionRequest );
  }
  
}
