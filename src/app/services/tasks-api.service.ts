import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {
  AssignmentsInfo,
  IAddress,
  IAssignment,
  IAssignmentsInfo,
  IAuthResult,
  ILogInUser,
  IWorker,
  Page
} from '../tasks/task.model';


@Injectable({
  providedIn: 'root'
})
export class TasksApiService {
  private expressUrl = 'http://localhost:3000/api';

  constructor(private http: HttpClient) {
  }

  public getAssignmentCount(departmentId: number | undefined, worker: string): Observable<number> {
    let params = new HttpParams();
    if (departmentId) {
      params = params.set('department', departmentId);
    }
    if (worker) {
      params = params.set('worker', worker);
    }
    return this.http.get<number>(`${this.expressUrl}/assignments/count`, {
      withCredentials: true,
      params: params
    });
  }

  public getAllAssignments(page: number, size: number,
                           departmentId: number | undefined,
                           worker: string): Observable<Page<IAssignmentsInfo>> {
    let params = new HttpParams();
    if (departmentId) {
      params = params.set('department', departmentId);
    }
    if (worker) {
      params = params.set('worker', worker);
    }
    params = params.set('page', page);
    params = params.set('size', size);

    return this.http.get<Page<IAssignmentsInfo>>(`${this.expressUrl}/assignments`, {
      withCredentials: true,
      params: params
    });
  }

  public addNewAssignment(task: AssignmentsInfo): Observable<AssignmentsInfo> {
    return this.http.post<AssignmentsInfo>(`${this.expressUrl}/assignments`, task, {withCredentials: true});
  }

  public register(worker: IWorker): Observable<IWorker> {
    return this.http.post<IWorker>(`${this.expressUrl}/auth/register`, worker, {withCredentials: true});
  }

  public logIn(worker: ILogInUser): Observable<IAuthResult> {
    return this.http.post<IAuthResult>(`${this.expressUrl}/auth/login`, worker, {withCredentials: true});
  }

  public logOut(): Observable<IAuthResult> {
    return this.http.post<IAuthResult>(`${this.expressUrl}/auth/logout`, {}, {withCredentials: true});
  }

  public getAllDepartments(): Observable<IAddress[]> {
    return this.http.get<IAddress[]>(`${this.expressUrl}/departments`, {withCredentials: true});
  }

  public getAllDeptWorkers(departmentId: number): Observable<IWorker[]> {
    return this.http.get<IWorker[]>(`${this.expressUrl}/departments/${departmentId}/workers`, {withCredentials: true});
  }

  public getTaskById(id: string): Observable<IAssignment> {
    return this.http.get<IAssignment>(`${this.expressUrl}/tasks/${id}`, {withCredentials: true});
  }

  public getAllTasks(): Observable<IAssignment[]> {
    return this.http.get<IAssignment[]>(`${this.expressUrl}/tasks`, {withCredentials: true});
  }

  public getWorkerAssignmentCount(): Observable<number> {
    return this.http.get<number>(`${this.expressUrl}/workers/assignments/count`, {withCredentials: true});
  }

  public getAllWorkerAssignments(page: number, size: number): Observable<Page<IAssignmentsInfo>> {
    let params = new HttpParams();
    params = params.set('page', page);
    params = params.set('size', size);
    return this.http.get<Page<IAssignmentsInfo>>(`${this.expressUrl}/workers/assignments`, {
      withCredentials: true,
      params: params
    });
  }

  public getWorkerInfo(): Observable<IWorker> {
    return this.http.get<IWorker>(`${this.expressUrl}/workers`, {withCredentials: true});
  }
}
