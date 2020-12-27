import { Account } from './../models/account.model';
import { Injectable } from '@angular/core';
import { ApiResponse } from './../../shared/models/api-response.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/config';

// {providedIn: 'root',}
@Injectable({ providedIn: 'root' })
export class UserAccountService {
  prefix = 'Account';

  constructor(private http: HttpClient) {}

  addAccount(requestBody: Account): Observable<ApiResponse<Account>> {
    return this.http.post<ApiResponse<Account>>(
      `${baseUrl}/${this.prefix}/addAccount`,
      requestBody
    );
  }

  editAccount(
    requestBody: Account,
    id: string
  ): Observable<ApiResponse<Account>> {
    return this.http.put<ApiResponse<Account>>(
      `${baseUrl}${this.prefix}/update-${id}`,
      requestBody
    );
  }
}
