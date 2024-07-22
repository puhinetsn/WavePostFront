import { Component, OnInit } from '@angular/core';
import { AssignmentsInfo, IAssignmentsInfo } from '../task.model';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-task-table-assignments',
  templateUrl: './task-table-assignments.component.html',
  styleUrls: ['./task-table-assignments.component.css']
})
export class TaskTableAssignmentsComponent implements OnInit {
  public assignments: IAssignmentsInfo[] = [];
  displayedColumns: string[] = ['taskName', 'workers', 'payment', 'startDate', 'endDate'];
  dataSource = new MatTableDataSource<IAssignmentsInfo>(this.assignments);

  ngOnInit(): void {
    this.assignments.push(
      new AssignmentsInfo(
        1,
        'Receive and process mail',
        [
          {
            firstName: 'Alice', middleName: 'B.', lastName: 'Smith', position: 'Mail Clerk', rate: 20,
            email: 'alice.smith@mail.com', bonus: 100
          }
        ],
        2,
        100,
        new Date('2023-07-01'),
        1, 
        3
      ),
      new AssignmentsInfo(
        2,
        'Send packages',
        [
          {
            firstName: 'Bob', middleName: 'C.', lastName: 'Brown', position: 'Package Handler', rate: 25,
            email: 'bob.brown@mail.com', bonus: 150
          },
          {
            firstName: 'Alice', middleName: 'B.', lastName: 'Smith', position: 'Package Handler', rate: 25,
            email: 'alice.smith@mail.com', bonus: 120
          }
        ],
        3,
        150,
        new Date('2023-07-03'),
        2,
        1
      ),
      new AssignmentsInfo(
        3,
        'Customer consultations',
        [
          {
            firstName: 'Charlie', middleName: 'E.', lastName: 'Davis', position: 'Customer Service Rep', rate: 18,
            email: 'charlie.davis@mail.com', bonus: 80
          }
        ],
        1,
        80,
        new Date('2023-07-05'),
        1, 
        2
      ),
      new AssignmentsInfo(
        4,
        'Manage mail items',
        [
          {
            firstName: 'David', middleName: 'F.', lastName: 'Evans', position: 'Mail Manager', rate: 30,
            email: 'david.evans@mail.com', bonus: 200
          },
          {
            firstName: 'Eve', middleName: 'G.', lastName: 'Green', position: 'Mail Manager', rate: 30,
            email: 'eve.green@mail.com', bonus: 190
          },
          {
            firstName: 'Frank', middleName: 'H.', lastName: 'Harris', position: 'Mail Manager', rate: 30,
            email: 'frank.harris@mail.com', bonus: 180
          }
        ],
        4,
        200,
        new Date('2023-07-07'),
        3, 
        1
      ),
      new AssignmentsInfo(
        5,
        'Financial transactions',
        [
          {
            firstName: 'Grace', middleName: 'I.', lastName: 'Johnson', position: 'Finance Clerk', rate: 28,
            email: 'grace.johnson@mail.com', bonus: 120
          }
        ],
        2,
        120,
        new Date('2023-07-09'),
        1,
        2
      ),
      new AssignmentsInfo(
        6,
        'Sort incoming mail',
        [
          {
            firstName: 'Hank', middleName: 'J.', lastName: 'Lewis', position: 'Mail Sorter', rate: 19,
            email: 'hank.lewis@mail.com', bonus: 90
          },
          {
            firstName: 'Ivy', middleName: 'K.', lastName: 'Martinez', position: 'Mail Sorter', rate: 19,
            email: 'ivy.martinez@mail.com', bonus: 85
          }
        ],
        2,
        90,
        new Date('2023-07-11'),
        2, 
        3
      ),
      new AssignmentsInfo(
        7,
        'Handle customer complaints',
        [
          {
            firstName: 'Jack', middleName: 'L.', lastName: 'Nelson', position: 'Customer Service Rep', rate: 21,
            email: 'jack.nelson@mail.com', bonus: 110
          },
          {
            firstName: 'Kelly', middleName: 'M.', lastName: 'Owen', position: 'Customer Service Rep', rate: 21,
            email: 'kelly.owen@mail.com', bonus: 105
          },
          {
            firstName: 'Leo', middleName: 'N.', lastName: 'Perry', position: 'Customer Service Rep', rate: 21,
            email: 'leo.perry@mail.com', bonus: 100
          }
        ],
        3,
        110,
        new Date('2023-07-13'),
        3,
        1
      ),
      new AssignmentsInfo(
        8,
        'Deliver priority mail',
        [
          {
            firstName: 'Mia', middleName: 'O.', lastName: 'Quinn', position: 'Mail Carrier', rate: 23,
            email: 'mia.quinn@mail.com', bonus: 130
          }
        ],
        4,
        130,
        new Date('2023-07-15'),
        1,
        3
      )
    );
    this.dataSource.data = this.assignments;
  }
}
