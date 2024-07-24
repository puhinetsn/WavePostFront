import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {IWorker} from "../tasks/task.model";
import {HttpClient} from "@angular/common/http";
import {TasksApiService} from "./tasks-api.service";

@Injectable({
  providedIn: 'root'
})
export class TasksRedirectService {

  constructor(private tasksApiService: TasksApiService) {
  }

  public redirect(router: Router) {
    this.tasksApiService.getWorkerInfo().subscribe(workerRes => {
      if (workerRes.position === 'Worker') {
        router.navigate(['/worker-schedule']);
      } else if (workerRes.position === 'Admin') {
        router.navigate(['/all-tasks']);
      }
    });
  }
}
