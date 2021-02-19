import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class HospedeService {

  private baseUrl = 'http://localhost:8080/api/';

  constructor(private http:HttpClient) { }

  getHospedeList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`+'hospedes');
  }

  createHospede(Hospede: object): Observable<object> {
    return this.http.post(`${this.baseUrl}`+'savehospede', Hospede);
  }

  getHospede(id: number): Observable<Object> {
    return this.http.get(`${this.baseUrl}/hospedes/${id}`);
  }
  
}                                           