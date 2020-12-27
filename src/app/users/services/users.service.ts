import { User } from '../models/user.model';
import { ApiResponse } from './../../shared/models/api-response.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/config';

@Injectable()
export class UsersService {
  constructor(private http: HttpClient) {}
  getAllUsers(): Observable<ApiResponse<User[]>> {
    return this.http.get<ApiResponse<User[]>>(`${baseUrl}/Account/GetAllUsers`);
  }
  editUser(user): Observable<ApiResponse<User>> {
    return this.http.put<ApiResponse<User>>(
      `${baseUrl}/Account/update/user.id`,
      user
    );
  }

  deleteUser(id): Observable<{}> {
    return this.http.delete(`${baseUrl}/Account/${id}`);
  }
}
