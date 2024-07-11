import { ChangeDetectorRef, Component, OnDestroy } from '@angular/core';
import { Address } from '../task.model';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnDestroy {
  selectedValue: string | undefined; 

  addresses: Address[] = [
    {departmentId: '1', departmentAdress: 'Address 1'},
    {departmentId: '2', departmentAdress: 'Address 2'},
    {departmentId: '3', departmentAdress: 'Address 3'},
  ];

  mobileQuery: MediaQueryList;

  fillerNav: string[] = ['Create new task', 'View schedule info', 'Add new account', 'Log Out'];


  private _mobileQueryListener: () => void;
  shouldRun: boolean;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);

    // Перевірка наявності window перед його використанням
    this.shouldRun = true;

    // Додати консольний лог для діагностики
    if (typeof window !== 'undefined') {
      console.log('Window location host:', window.location.host);
      console.log('shouldRun:', this.shouldRun);
    } else {
      console.log('Window is undefined');
    }
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
