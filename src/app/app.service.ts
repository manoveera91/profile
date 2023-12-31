import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  get(): Observable<any> {
    return this.http.get(`http://localhost:3000/profile`);
  }

  getByID(id: number): Observable<any> {
    return this.http.get(`http://localhost:3000/profile/${id}`);
  }
}
