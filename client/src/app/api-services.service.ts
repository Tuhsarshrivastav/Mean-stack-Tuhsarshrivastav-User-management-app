import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {
  apiUrl = 'http://localhost:5000/users'
  createapiUrl = 'http://localhost:5000/user'
  deleteapiUrl = 'http://localhost:5000/user'
  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}`)
  }

  //create data
  createData(data: any): Observable<any> {
    return this.http.post(`${this.createapiUrl}`, data)
  }
  deleteData(id: any): Observable<any> {
    let ids = id
    return this.http.delete(`${this.deleteData}/${ids}`)
  }
}
