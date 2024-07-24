import {Component, Inject, Input, OnChanges, OnInit, PLATFORM_ID, SimpleChanges} from '@angular/core';
import {AssignmentsInfo, IAssignmentsInfo, Page} from '../task.model';
import {MatTableDataSource} from '@angular/material/table';
import {isPlatformBrowser} from "@angular/common";
import {TasksApiService} from "../../services/tasks-api.service";
import {PageEvent} from "@angular/material/paginator";
import {Observable} from "rxjs";

@Component({
  selector: 'app-task-table-assignments',
  templateUrl: './task-table-assignments.component.html',
  styleUrls: ['./task-table-assignments.component.css']
})
export class TaskTableAssignmentsComponent implements OnInit, OnChanges {
  @Input('loadPage') loadPage!: (page: number, size: number) => Observable<Page<IAssignmentsInfo>>;
  @Input('getLength') getLength!: () => Observable<number>;
  displayedColumns: string[] = ['taskName', 'workers', 'payment', 'startDate', 'endDate'];
  dataSource = new MatTableDataSource<AssignmentsInfo>([]);
  length: number = 0;
  pageSize: number = 10;
  pageIndex: number = 0;
  pageSizeOptions = [5, 10, 25];

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private tasksApiService: TasksApiService
  ) {
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.loadTablePage(this.pageIndex, this.pageSize);
      this.getLength().subscribe(
        res => this.length = res);
    }
  }

  ngOnChanges() {
    if (isPlatformBrowser(this.platformId)) {
      this.pageIndex = 0;
      this.loadTablePage(this.pageIndex, this.pageSize);
      this.getLength().subscribe(
        res => this.length = res);
    }
  }

  handlePageEvent(e: PageEvent): void {
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;
    this.loadTablePage(this.pageIndex, this.pageSize);
  }

  private loadTablePage(page: number, size: number): void {
    this.loadPage(page, size).subscribe(res => {
      this.dataSource.data = res.res.map(r => new AssignmentsInfo(
        r._id, r.type, r.workers, r.duration, r.startDate, r.exequtorsQty, r.departmentId, r.description));
    });
  }
}
