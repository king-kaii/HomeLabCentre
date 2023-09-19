import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  private url = '';
  constructor(private http: HttpClient) { }
  private dataSubj = new BehaviorSubject<string | null>(null);
  docData$ = this.dataSubj.asObservable()
  
  sendData(data:any){
    this.dataSubj.next(data)
  }
  postPatientData(data:any){
  return this.http.post(`${this.url}`, data)
  }
 
}
