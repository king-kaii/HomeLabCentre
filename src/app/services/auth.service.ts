import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private url = 'http://localhost:4000/auth';
  constructor(private http: HttpClient) { }

  signUp(data: any): Observable<any>{
    return this.http.post<any>(`${this.url}/signup`, data)
  }

  login(data: any): Observable<any>{
    return this.http.post(`${this.url}/login`,data)
  }

}