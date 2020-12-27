import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApiResponse } from './../../shared/models/api-response.model';
import { baseUrl } from 'src/environments/config';
import { Observable } from 'rxjs';
import { BonusRequest } from '../models/bonus-request.model';
import { UpdateBonusRequest } from '../models/update-bonus-request.modal';

@Injectable()
export class SupervisorHomeworkService {
  prefix = 'HomeWork';
  constructor(private http: HttpClient) {}
  getAllRequests(): Observable<BonusRequest[]> {
    return this.http.get<BonusRequest[]>(
      `${baseUrl}/${this.prefix}/GetBounsRequests`
    );
  }
  updateBonusRequest(body: UpdateBonusRequest): Observable<ApiResponse> {
    return this.http.put<ApiResponse>(
      `${baseUrl}/${this.prefix}/update?id=${body.id}`,
      body
    );
  }
}
