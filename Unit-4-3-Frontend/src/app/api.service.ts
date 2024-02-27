import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  public addStudent(body: any) {
    return this.http.post('http://localhost:3000/addElectives', body);
  }
  public getAllElectivesData() {
    return this.http.get('http://localhost:3000/findAllStudents');
  }
  public findStudent(name: any) {
    return this.http.get(`http://localhost:3000/findStudent/${name}`);
  }
  public deleteStudent(body: any) {
    return this.http.delete('http://localhost:3000/deleteStudent', body);
  }
  public updateApi(body: any) {
    return this.http.post('http://localhost:3000/updateElectives', body);
  }
}
