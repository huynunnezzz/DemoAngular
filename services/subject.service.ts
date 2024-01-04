
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const url = 'http://localhost:3000';
@Injectable({
  providedIn: 'root'
})

export class SubjectService {

  constructor(private http:HttpClient) { }

  getList(): Observable<any>{
    return this.http.get(`${url}/getdata`);
  }
  getListbyID(id:String): Observable<any>{
    return this.http.get(`${url}/getdata/${id}`);
  }

  insertStd(newStd:any): Observable<any>{
    return this.http.post(`${url}/insert-data`,newStd);
  }

  deleteStd(id:String): Observable<any>{
    return this.http.delete(`${url}/delete-data/${id}`);
  }

  editStd(id:String,editStd:any): Observable<any>{
    return this.http.put(`${url}/edit-data/${id}`,editStd);
  }
}
