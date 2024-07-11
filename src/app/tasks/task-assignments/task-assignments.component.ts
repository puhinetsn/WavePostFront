import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { AssignmentsInfo } from '../task.model';
import { MatTableDataSource } from '@angular/material/table';

const ELEMENT_DATA: AssignmentsInfo[] = [
  { id: 1, taskName: 'Task 1', worker: 'Alice', duration: 1, payment: 100 },
  { id: 2, taskName: 'Task 2', worker: 'Bob', duration: 2, payment: 200 },
  { id: 3, taskName: 'Task 3', worker: 'Charlie', duration: 3, payment: 300 },
  { id: 4, taskName: 'Task 4', worker: 'David', duration: 4, payment: 400 },
  { id: 5, taskName: 'Task 5', worker: 'Eve', duration: 5, payment: 500 },
  { id: 6, taskName: 'Task 6', worker: 'Frank', duration: 6, payment: 600 },
  { id: 7, taskName: 'Task 7', worker: 'Grace', duration: 7, payment: 700 },
  { id: 8, taskName: 'Task 8', worker: 'Hank', duration: 8, payment: 800 },
  { id: 9, taskName: 'Task 9', worker: 'Ivy', duration: 9, payment: 900 },
  { id: 10, taskName: 'Task 10', worker: 'Jack', duration: 10, payment: 1000 },
  { id: 3, taskName: 'Task 3', worker: 'Charlie', duration: 3, payment: 300 },
  { id: 4, taskName: 'Task 4', worker: 'David', duration: 4, payment: 400 },
  { id: 5, taskName: 'Task 5', worker: 'Eve', duration: 5, payment: 500 },
  { id: 6, taskName: 'Task 6', worker: 'Frank', duration: 6, payment: 600 },
  { id: 7, taskName: 'Task 7', worker: 'Grace', duration: 7, payment: 700 },
  { id: 8, taskName: 'Task 8', worker: 'Hank', duration: 8, payment: 800 },
  { id: 9, taskName: 'Task 9', worker: 'Ivy', duration: 9, payment: 900 },
  { id: 10, taskName: 'Task 10', worker: 'Jack', duration: 10, payment: 1000 },
];


@Component({
  selector: 'app-task-assignments',
  templateUrl: './task-assignments.component.html',
  styleUrl: './task-assignments.component.css'
})
export class TaskAssignmentsComponent {
  displayedColumns: string[] = ['id', 'taskName', 'worker', 'duration', 'payment'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
