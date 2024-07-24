import {Component, Inject, Input, OnInit, PLATFORM_ID} from '@angular/core';
import {IWorker} from '../task.model';
import {TasksApiService} from "../../services/tasks-api.service";
import {isPlatformBrowser} from "@angular/common";

@Component({
  selector: 'app-worker-data',
  templateUrl: './worker-data.component.html',
  styleUrl: './worker-data.component.css'
})
export class WorkerDataComponent implements OnInit {
  @Input() worker!: IWorker;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private apiService: TasksApiService
  ) {
  }

  ngOnInit(): void {
    this.worker = {
      _id: '',
      firstName: '',
      lastName: '',
      middleName: '',
      position: '',
      rate: 0,
      departmentId: 0,
      email: '',
      bonus: 0,
    };
    if (isPlatformBrowser(this.platformId)) {
      this.apiService.getWorkerInfo().subscribe(res => this.worker = res);
    }
  }
}
