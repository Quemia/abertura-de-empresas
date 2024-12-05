import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { catchError, Observable, pipe, retry, throwError } from 'rxjs';
import { Company } from '../../types/companies/company';

@Injectable({
  providedIn: 'root',
})
export class CompanyService {
  private url = 'http://localhost:3000';

  constructor(private httpClient: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  };

  getCompany(): Observable<Company[]> {
    return this.httpClient.get<Company[]>(`${this.url}/empresas`);
  }

  getEspecificCompany(id: any): Observable<Company[]> {
    return this.httpClient.get<Company[]>(`${this.url}/empresas/${id}`);
  }

  postCompany(company: any): Observable<any> {
    return this.httpClient.post<any>(`${this.url}/empresas`, company);
  }

  updateCompany(data: any, id: any): Observable<any> {
    return this.httpClient.put<any>(`${this.url}/empresas/${id}`, data);
  }

  listRegistrationEntity(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.url}/entidade-registro`);
  }
}
