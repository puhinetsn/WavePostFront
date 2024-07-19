import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class TasksApiService {
  private expressUrl = 'http://localhost:3000/api';
  constructor(private http: HttpClient) { }

  getAllAssignmets(): Observable<any> {
    return this.http.get(`${this.expressUrl}/assignments`);
  }

  addNewAssignment(task: any): Observable<any> {
    return this.http.post(`${this.expressUrl}/assignments`, task);
  }


  register(worker: any): Observable<any> {
    return this.http.post(`${this.expressUrl}/auth`, worker);
  }

  logIn(worker: any): Observable<any> {
    return this.http.post(`${this.expressUrl}/assignments`, worker);
  }

  logOut(worker: any): Observable<any> {
    return this.http.post(`${this.expressUrl}/assignments`, worker);
  }


  getAllDepartments(): Observable<any> {
    return this.http.get(`${this.expressUrl}/departments`);
  }

  getAllDeptWorkers(departmentId: number): Observable<any> {
    return this.http.get(`${this.expressUrl}/departments/${departmentId}/workers`);
  }


  public getAllTasks(): Observable<IAssignment[]> {
    return this.http.get<IAssignment[]>(`${this.expressUrl}/tasks`);
  }

  getAllWorkerAssignments(): Observable<any> {
    return this.http.get(`${this.expressUrl}/workers/assignments`);
  }

  getWorkersInfo(): Observable<any> {
    return this.http.get(`${this.expressUrl}/`);
  }

}import { IAssignment } from '../tasks/task.model';

