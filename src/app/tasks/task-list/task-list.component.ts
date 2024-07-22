import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { TasksApiService } from '../../services/tasks-api.service';
import { IAddress, IAssignment } from '../task.model';
import { Observable } from 'rxjs';
import { TaskServiceService } from '../../services/task-service.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit, OnDestroy {
  selectedValue: IAddress | undefined;
  public addresses$: Observable<IAddress[]> = this.tasksService.addresses$; 
  public tasks$: Observable<IAssignment[]> = this.tasksService.tasks$; 
  public adminName: string = '';

  mobileQuery: MediaQueryList;
  fillerNav: string[] = ['View schedule info', 'Add new account', 'Log Out'];

  private _mobileQueryListener: () => void;
  shouldRun: boolean;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private crud: TasksApiService,
    private tasksService: TaskServiceService
  ) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    this.shouldRun = true;

    if (typeof window !== 'undefined') {
      console.log('Window location host:', window.location.host);
      console.log('shouldRun:', this.shouldRun);
    } else {
      console.log('Window is undefined');
    }
  }

  public ngOnInit(): void {
    this.crud.getAllDepartments().subscribe((res: IAddress[]) => {
      this.tasksService.setAddresses(res); 
    });

    this.crud.getAllTasks().subscribe((res: IAssignment[]) => {
      this.tasksService.setAssignment(res); 
    });

    this.crud.getWorkersInfo().subscribe((res) => {
      this.adminName = res.firstName;
    });
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
