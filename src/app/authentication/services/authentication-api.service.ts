import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest, RegisterRequest } from '../models';
import { baseUrl } from 'src/environments/config';
import { ApiResponse } from '../../shared/models/api-response.model';
import { Observable } from 'rxjs';

@Injectable()
export class AuthenticationApiService {
  prefix = 'account';
  constructor(private http: HttpClient) { }

  register(requestBody: RegisterRequest): Observable<any> {
    return this.http.post<ApiResponse<RegisterRequest>>(`${baseUrl}/${this.prefix}/register`, requestBody);
  }

  login(requestBody: LoginRequest): Observable<any> {
    return this.http.post<ApiResponse>(`${baseUrl}/${this.prefix}/authenticate`, requestBody);
  }

}

