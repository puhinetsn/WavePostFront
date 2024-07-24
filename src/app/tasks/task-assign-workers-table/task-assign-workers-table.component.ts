import {
  AfterViewInit,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {IWorker, IWorkerInfo} from "../task.model";
import {BehaviorSubject} from "rxjs";
import {MatPaginator} from "@angular/material/paginator";

@Component({
  selector: 'app-task-assign-workers-table',
  templateUrl: './task-assign-workers-table.component.html',
  styleUrls: ['./task-assign-workers-table.component.css']
})
export class TaskAssignWorkersTableComponent implements AfterViewInit, OnChanges {
  displayedColumns: string[] = ['firstName', 'lastName', 'middleName'];
  @Input('dataSource') dataSource!: IWorker[];
  @Input('exequtorsQty') number!: number;
  @Output('workers') workers = new EventEmitter<IWorker[]>();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  freeWorkers = new MatTableDataSource<IWorker>(this.dataSource);
  assignedWorkers = new MatTableDataSource<IWorker>([]);
  clickedFreeWorker!: IWorker | null;
  clickedAssignedWorker!: IWorker | null;

  ngAfterViewInit(): void {
    this.freeWorkers.paginator = this.paginator;
  }

  ngOnChanges() {
    this.freeWorkers.data = this.dataSource;
    this.assignedWorkers.data = [];
    this.workers.next(this.assignedWorkers.data);
    this.clickedFreeWorker = null;
    this.clickedAssignedWorker = null;
  }

  assignWorker() {
    if (this.clickedFreeWorker) {
      const worker = this.clickedFreeWorker;
        this.freeWorkers.data = this.freeWorkers.data.filter(w => w !== worker);
      this.assignedWorkers.data = [...this.assignedWorkers.data, worker];
      this.workers.next(this.assignedWorkers.data);
    }
    this.clickedFreeWorker = null;
  }

  removeWorker() {
    if (this.clickedAssignedWorker) {
      const worker = this.clickedAssignedWorker;
      this.assignedWorkers.data = this.assignedWorkers.data.filter(w => w !== worker);
      this.freeWorkers.data = [...this.freeWorkers.data, worker];
      this.workers.next(this.assignedWorkers.data);
    }
    this.clickedAssignedWorker = null;
  }
}
