import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { baseUrl } from 'src/environments/config';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/shared/models/api-response.model';
import { HomeWorkSubmissionForStudent } from '../models/HomeWorkSubmissionForStudent';

@Injectable({
  providedIn: 'root',
})
export class StudentHomeworkService {
  prefix = 'HomeWork';

  constructor(private http: HttpClient) {}
  GetHomeworkForStudent(): Observable<any> {
    return this.http.get<ApiResponse>(
      `${baseUrl}${this.prefix}/GetHomeworkForStudent`
    );
  }
  GetHomeworkSubmitionById(id): Observable<any> {
    return this.http.get(
      `${baseUrl}${this.prefix}/GetHomeworkSubmitionById?HomeWorkSubmitionId=${id}`
    );
  }
  SubmitHomeWorkForStudent(
    requestBody: HomeWorkSubmissionForStudent
  ): Observable<ApiResponse<Account>> {
    return this.http.post<ApiResponse<Account>>(
      `${baseUrl}${this.prefix}/SubmitHomeWorkForStudent?id=${requestBody.id}`,
      requestBody
    );
  }
}
