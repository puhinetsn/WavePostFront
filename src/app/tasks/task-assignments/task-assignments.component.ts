import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import {AssignmentsInfo, IAddress, IAssignmentsInfo} from '../task.model';
import {TasksApiService} from "../../services/tasks-api.service";
import {Observable} from "rxjs";
import {TaskServiceService} from "../../services/task-service.service";
import {Inject, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'app-task-assignments',
  templateUrl: './task-assignments.component.html',
  styleUrls: ['./task-assignments.component.css']
})
export class TaskAssignmentsComponent implements OnInit {
  selectedValue: IAddress | undefined;
  workerName= '';
  loadPage = (page: number, size: number) => {
    return this.apiService.getAllAssignments(page, size, undefined, '')};
  getLength = () => {return this.apiService.getAssignmentCount(undefined, '')};
  public addresses$: Observable<IAddress[]>;

  constructor(
    private apiService: TasksApiService,
    private tasksService: TaskServiceService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.addresses$ = this.tasksService.addresses$;
  }

  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.apiService.getAllDepartments().subscribe((res: IAddress[]) => {
        this.tasksService.setAddresses(res);
      });
    }
  }

  newLoadPage(id: number|undefined, worker: string) {
    return  (page: number, size: number) => {
      return this.apiService.getAllAssignments(page, size, id, worker)};
  }

  onChange() {
    const id = this.selectedValue?._id;
    const worker = this.workerName;
    this.loadPage = this.newLoadPage(id, worker);
    this.getLength = () => {return this.apiService.getAssignmentCount(id, worker)};
  }
}
