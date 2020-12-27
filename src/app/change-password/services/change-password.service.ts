import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { baseUrl } from '../../../environments/config';
import { ApiResponse } from '../../shared/models/api-response.model';
import { Observable } from "rxjs";
import { ChangePasswordModel } from "../models/change-password.model";
@Injectable()

export class ChangePasswordService {

    constructor(private http: HttpClient) {}

    changePassword(changePasswordRequest: ChangePasswordModel): Observable<any> {
        return this.http.post<ApiResponse>(`${baseUrl}/Account/reset-password`, changePasswordRequest)
    }
}