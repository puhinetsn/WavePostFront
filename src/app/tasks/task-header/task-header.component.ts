import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {MediaMatcher} from "@angular/cdk/layout";
import {TasksApiService} from "../../services/tasks-api.service";
import {TaskServiceService} from "../../services/task-service.service";
import {Router} from "@angular/router";
import {Inject, PLATFORM_ID} from '@angular/core';
import {isPlatformBrowser} from "@angular/common";

interface NavItem {
  name: string;
  onClick: () => void;
}

@Component({
  selector: 'app-task-header',
  templateUrl: './task-header.component.html',
  styleUrl: './task-header.component.css'
})
export class TaskHeaderComponent implements OnInit, OnDestroy {
  mobileQuery: MediaQueryList;
  fillerNav: NavItem[] = [];
  public userName: string = '';

  private _mobileQueryListener: () => void;
  shouldRun: boolean;

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    private crud: TasksApiService,
    private router: Router,
    @Inject(PLATFORM_ID) private platformId: Object
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
    if (isPlatformBrowser(this.platformId)) {
      this.crud.getWorkerInfo().subscribe((res) => {
        this.userName = res.firstName;
        if (res.position === 'Admin') {
          this.fillerNav = [{
            name: 'View all assigned tasks',
            onClick: () => this.router.navigate(['/task-assignments'])
          }, {
            name: 'Assign a new task',
            onClick: () => this.router.navigate(['/all-tasks'])
          },]
        } else if (res.position === 'Worker') {
          this.fillerNav = [{
            name: 'View all assigned tasks',
            onClick: () => this.router.navigate(['/worker-schedule'])
          }]
        }
        this.fillerNav = [...this.fillerNav, {
          name: 'Log out',
          onClick: () => this.crud.logOut().subscribe(
            res => this.router.navigate(['/login']))
        }];
      });
    }
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  logout() {
    this.crud.logOut().subscribe((res) => {
      this.router.navigate(['/login']);
    });
  }
}
