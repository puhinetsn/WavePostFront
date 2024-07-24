import {Component} from '@angular/core';
import {TasksApiService} from "../../services/tasks-api.service";

@Component({
  selector: 'app-task-personal-schedule',
  templateUrl: './task-personal-schedule.component.html',
  styleUrls: ['./task-personal-schedule.component.css']
})
export class TaskPersonalScheduleComponent {
  loadPage = (page: number, size: number) => {
    return this.apiService.getAllWorkerAssignments(page, size)};
  getLength = () => {return this.apiService.getWorkerAssignmentCount()};

  constructor(
    private apiService: TasksApiService
  ) {
  }
}
