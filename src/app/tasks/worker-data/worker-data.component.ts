import { Component, Input, OnInit } from '@angular/core';
import { IWorker, Worker } from '../task.model';

@Component({
  selector: 'app-worker-data',
  templateUrl: './worker-data.component.html',
  styleUrl: './worker-data.component.css'
})
export class WorkerDataComponent implements OnInit {
  @Input() worker!: IWorker;

  ngOnInit(): void {
    this.worker = new Worker('Donald', 'Trump', 'D.', 'worker', 12000, 'post', 200);
  }
}
