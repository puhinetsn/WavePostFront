import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { IAddress, IAssignment } from '../tasks/task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  private readonly _addresses$: BehaviorSubject<IAddress[]> = new BehaviorSubject<IAddress[]>([]);
  public readonly addresses$ = this._addresses$.asObservable();
  private readonly _tasks$: BehaviorSubject<IAssignment[]> = new BehaviorSubject<IAssignment[]>([]);
  public readonly tasks$ = this._tasks$.asObservable();

  public setAddresses(addresses: IAddress[]): void {
    this._addresses$.next(addresses);
  }

  public setAssignment(tasks: IAssignment[]): void {
    this._tasks$.next(tasks);
  }
}
