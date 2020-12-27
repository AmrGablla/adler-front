import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseUrl } from 'src/environments/config';
import { RegisterRequest } from '../models';

@Injectable({
  providedIn: 'root'
})
export class RegisterDataService {
  registerData: RegisterRequest;
  constructor(private http: HttpClient) { }
  checkPromoCode(promoCode: string): Observable<any> {
    return this.http.get(`${baseUrl}/PromoCode/CheckPromoCode?name=${promoCode}`);
  }

  getAllGroupInstances(): Observable<any> {
    return this.http.get(`${baseUrl}/GroupInstance/GetAll`);
  }

  register(data): Observable<any> {
    return this.http.post(`${baseUrl}/Account/register`, data );
  }

}
