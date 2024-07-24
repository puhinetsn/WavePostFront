import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { TasksApiService } from '../../services/tasks-api.service';
import { IAddress, IAssignment } from '../task.model';
import { Observable } from 'rxjs';
import { TaskServiceService } from '../../services/task-service.service';
import { Router } from '@angular/router';
import {Inject, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  public tasks$: Observable<IAssignment[]> = this.tasksService.tasks$;

  constructor(
    private crud: TasksApiService,
    private tasksService: TaskServiceService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
   ) {
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.crud.getAllTasks().subscribe((res: IAssignment[]) => {
        this.tasksService.setAssignment(res);
      });
    }
  }

  navigateToTaskDetail(taskId: string): void {
    this.router.navigate(['/task-assignment', taskId]);
  }
}
