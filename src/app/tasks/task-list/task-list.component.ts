import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { IAddress, Address, Assignment, IAssignment } from '../task.model';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit, OnDestroy {
  selectedValue: string | undefined; 

  public addresses: IAddress[] = [];
  public tasks: IAssignment[] = [];

  public ngOnInit(): void {
    this.addresses.push(
      new Address(1, 'Address 1'),
      new Address(2, 'Address 2'),
      new Address(3, 'Address 3')
    )

    this.tasks.push(
      new Assignment(1, 'Mail Reception and Processing', 'Receive, sort, and distribute incoming mail to the department.', 1, 100),
      new Assignment(2, 'Parcel Dispatch', 'Handle parcel shipments, including filling out necessary documents and weighing items.', 2, 150),
      new Assignment(3, 'Customer Consultation', 'Inform customers about services, rates, delivery times, and shipping methods.', 1, 80),
      new Assignment(4, 'Mail Management', 'Keep track of shipments, monitor their status, and resolve delivery issues.', 3, 120),
      new Assignment(5, 'Financial Transactions', 'Process financial transactions related to the sale of stamps, service tickets, and other payments.', 1, 90)
    );    

  }

  mobileQuery: MediaQueryList;

  fillerNav: string[] = ['View schedule info', 'Add new account', 'Log Out'];


  private _mobileQueryListener: () => void;
  shouldRun: boolean;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
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

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
