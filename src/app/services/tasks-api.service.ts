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
    return this.http.get(`${this.expressUrl}/assignments`, { withCredentials: true });
  }

  addNewAssignment(task: any): Observable<any> {
    return this.http.post(`${this.expressUrl}/assignments`, task, { withCredentials: true });
  }


  register(worker: any): Observable<any> {
    return this.http.post(`${this.expressUrl}/auth/register`, worker, { withCredentials: true });
  }

  logIn(worker: any): Observable<any> {
    return this.http.post(`${this.expressUrl}/auth/login`, worker, { withCredentials: true });
  }

  logOut(worker: any): Observable<any> {
    return this.http.post(`${this.expressUrl}/auth/logout`, worker, { withCredentials: true });
  }


  getAllDepartments(): Observable<IAddress[]> {
    return this.http.get<IAddress[]>(`${this.expressUrl}/departments/`, { withCredentials: true });
  }

  getAllDeptWorkers(departmentId: number): Observable<any> {
    return this.http.get(`${this.expressUrl}/departments/${departmentId}/workers`, { withCredentials: true });
  }


  public getAllTasks(): Observable<IAssignment[]> {
    return this.http.get<IAssignment[]>(`${this.expressUrl}/tasks`, { withCredentials: true });
  }
  

  getAllWorkerAssignments(): Observable<any> {
    return this.http.get(`${this.expressUrl}/workers/assignments`, { withCredentials: true });
  }

  getWorkersInfo(): Observable<any> {
    return this.http.get(`${this.expressUrl}/workers/`, { withCredentials: true });
  }

}
import { IAddress, IAssignment } from '../tasks/task.model';

