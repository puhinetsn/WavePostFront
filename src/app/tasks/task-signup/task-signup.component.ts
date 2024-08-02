import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { merge } from 'rxjs';
import { TasksApiService } from '../../services/tasks-api.service';
import { isPlatformBrowser } from '@angular/common';
import { IAddress } from '../task.model';
import { MatTableDataSource } from '@angular/material/table';
import {AssignmentsInfo, IAssignmentsInfo} from '../task.model';
import {Observable} from "rxjs";
import {TaskServiceService} from "../../services/task-service.service";
import {Inject, PLATFORM_ID} from '@angular/core';



@Component({
  selector: 'app-task-signup',
  templateUrl: './task-signup.component.html',
  styleUrls: ['./task-signup.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskSignupComponent implements OnInit {
  selectedValue: IAddress | undefined;
  form!: FormGroup;
  public addresses$: Observable<IAddress[]>;
  readonly email = new FormControl('', [Validators.required, Validators.email]);
  errorMessage = signal('');
  hide = signal(true);
  loadPage = (page: number, size: number) => {
    return this.apiService.getAllAssignments(page, size, undefined, '')};
  getLength = () => {return this.apiService.getAssignmentCount(undefined, '')};

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private apiService: TasksApiService,
    private tasksService: TaskServiceService,
    @Inject(PLATFORM_ID) private platformId: Object
  ) {
    this.addresses$ = this.tasksService.addresses$;
    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: '',
      lastName: '',
      middleName: '',
      email: this.email,
      position: '',
      rate: 0,
      password: '',
      departmentId: this.selectedValue
    });

      if (isPlatformBrowser(this.platformId)) {
        this.apiService.getAllDepartments().subscribe((res: IAddress[]) => {
          this.tasksService.setAddresses(res);
        });
      }

  }

  updateErrorMessage() {
    if (this.email.hasError('required')) {
      this.errorMessage.set('You must enter an address');
    } else if (this.email.hasError('email')) {
      this.errorMessage.set('Not a valid email');
    } else {
      this.errorMessage.set('');
    }
  }

  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  submit(): void {
      this.apiService.register(this.form.getRawValue()).subscribe(res => {
        console.log(res);
      });
  }
  onDepartmentChange(selectedDepartment: IAddress): void {
    this.selectedValue = selectedDepartment;
  }
}
