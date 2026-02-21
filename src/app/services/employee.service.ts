import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http:HttpClient) { }

  //http://localhost:8080/login
  login(userLogin:any):Observable<any>{
    return this.http.post('http://localhost:8080/login',userLogin);
  }

  //http://localhost:8080/register
  register(employee:any):Observable<any>{
    return this.http.post('http://localhost:8080/register',employee);
  }

  //http://localhost:8080/getAll
  getAllEmployee():Observable<any>{
    return this.http.get('http://localhost:8080/getAll');
  }

  deleteEmployee(id:any):Observable<any>{
    return this.http.delete(`http://localhost:8080/delete?id=${id}`);
  }
  getEmployeeById(id: any) {
  return this.http.get(`http://localhost:8080/getById?id=${id}`);
}
}
