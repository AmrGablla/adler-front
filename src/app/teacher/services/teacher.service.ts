import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from 'src/app/shared/models/api-response.model';
import { baseUrl } from 'src/environments/config';
import { GroupInstance } from '../models/groupInstances';
import { LessonInstance } from '../models/lessonInstances.model';
import { HomeWorkSubmission } from '../models/homework-submissions.model';

@Injectable()
export class TeacherService {
    homeWorkprefix = 'HomeWork';
    GroupInstanceprefix = 'GroupInstance';
    lessonInstanceprefix = 'LessonInstance';
    constructor(private http: HttpClient) { }

    getAllHomeWorksSubmissionsByGroupInstance(groupInstanceId: number): Observable<ApiResponse<HomeWorkSubmission[]>> {
        return this.http.get<ApiResponse<HomeWorkSubmission[]>>(`${baseUrl}${this.homeWorkprefix}/GetHomeworkSubmitionByGroupInstance?GroupInstanceId=${groupInstanceId}`);
    }

    getAllGroupInstancesByTeacherId(teacherId: number): Observable<ApiResponse<GroupInstance[]>> {
        return this.http.get<ApiResponse<GroupInstance[]>>(`${baseUrl}${this.GroupInstanceprefix}/GetByTeacher?teacherId=${teacherId}`);
    }

    getAllLessonInstancesByGroupInstance(groupInstanceId: number): Observable<ApiResponse<LessonInstance[]>> {
        return this.http.get<ApiResponse<LessonInstance[]>>(`${baseUrl}${this.lessonInstanceprefix}/GetByGroupInstance?GroupInstanceId=${groupInstanceId}`);
    }
    getLessonReportStudents(LessonInstanceId): Observable<any> {
        return this.http.get<ApiResponse>(`${baseUrl}${this.lessonInstanceprefix}/GetStudents?LessonInstanceId=${LessonInstanceId}`)
    }

    submitLessonReport(lessonreport): Observable<any> {
        return this.http.post<ApiResponse>(`${baseUrl}${this.lessonInstanceprefix}/LessonReport`, lessonreport);
    }
    submitHomeworkCorrection(homework): Observable<any> {
        return this.http.post<ApiResponse>(`${baseUrl}${this.homeWorkprefix}/SubmitHomeWorkCorrection`, homework);
    }

    getHomeworkSubmitions(): Observable<any> {
        return this.http.get(`${baseUrl}${this.homeWorkprefix}/GetHomeworkSubmitions`);
    }

    getHomeworkById(homeworkId): Observable<any> {
        return this.http.get(`${baseUrl}${this.homeWorkprefix}/GetHomeworkSubmitionById?HomeWorkSubmitionId=${homeworkId}`);
    }

}

