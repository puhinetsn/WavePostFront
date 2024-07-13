import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { AssignmentsInfo, IAssignmentsInfo } from '../task.model';

@Component({
  selector: 'app-task-assignments',
  templateUrl: './task-assignments.component.html',
  styleUrls: ['./task-assignments.component.css']
})
export class TaskAssignmentsComponent implements OnInit {
  public assignments: IAssignmentsInfo[] = [];
  displayedColumns: string[] = ['taskName', 'workers', 'payment', 'startDate', 'endDate'];
  dataSource = new MatTableDataSource<IAssignmentsInfo>(this.assignments);

  ngOnInit(): void {
    this.assignments.push(
      new AssignmentsInfo(
        1,
        'Receive and process mail',
        [
          { firstName: 'Alice', middleName: 'B.', lastName: 'Smith', position: 'Mail Clerk', rate: 20 }
        ],
        2,
        100,
        new Date('2023-07-01'),
        1
      ),
      new AssignmentsInfo(
        2,
        'Send packages',
        [
          { firstName: 'Bob', middleName: 'C.', lastName: 'Brown', position: 'Package Handler', rate: 25 },
          { firstName: 'Alice', middleName: 'B.', lastName: 'Smith', position: 'Package Handler', rate: 25 }
        ],
        3,
        150,
        new Date('2023-07-03'),
        2
      ),
      new AssignmentsInfo(
        3,
        'Customer consultations',
        [
          { firstName: 'Charlie', middleName: 'E.', lastName: 'Davis', position: 'Customer Service Rep', rate: 18 }
        ],
        1,
        80,
        new Date('2023-07-05'),
        1
      ),
      new AssignmentsInfo(
        4,
        'Manage mail items',
        [
          { firstName: 'David', middleName: 'F.', lastName: 'Evans', position: 'Mail Manager', rate: 30 },
          { firstName: 'Eve', middleName: 'G.', lastName: 'Green', position: 'Mail Manager', rate: 30 },
          { firstName: 'Frank', middleName: 'H.', lastName: 'Harris', position: 'Mail Manager', rate: 30 }
        ],
        4,
        200,
        new Date('2023-07-07'),
        3
      ),
      new AssignmentsInfo(
        5,
        'Financial transactions',
        [
          { firstName: 'Grace', middleName: 'I.', lastName: 'Johnson', position: 'Finance Clerk', rate: 28 }
        ],
        2,
        120,
        new Date('2023-07-09'),
        1
      ),
      new AssignmentsInfo(
        6,
        'Sort incoming mail',
        [
          { firstName: 'Hank', middleName: 'J.', lastName: 'Lewis', position: 'Mail Sorter', rate: 19 },
          { firstName: 'Ivy', middleName: 'K.', lastName: 'Martinez', position: 'Mail Sorter', rate: 19 }
        ],
        2,
        90,
        new Date('2023-07-11'),
        2
      ),
      new AssignmentsInfo(
        7,
        'Handle customer complaints',
        [
          { firstName: 'Jack', middleName: 'L.', lastName: 'Nelson', position: 'Customer Service Rep', rate: 21 },
          { firstName: 'Kelly', middleName: 'M.', lastName: 'Owen', position: 'Customer Service Rep', rate: 21 },
          { firstName: 'Leo', middleName: 'N.', lastName: 'Perry', position: 'Customer Service Rep', rate: 21 }
        ],
        3,
        110,
        new Date('2023-07-13'),
        3
      ),
      new AssignmentsInfo(
        8,
        'Deliver priority mail',
        [
          { firstName: 'Mia', middleName: 'O.', lastName: 'Quinn', position: 'Mail Carrier', rate: 23 }
        ],
        4,
        130,
        new Date('2023-07-15'),
        1
      )
    );
    this.dataSource.data = this.assignments;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
