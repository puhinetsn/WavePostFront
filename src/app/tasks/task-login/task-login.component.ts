import { HttpClient } from '@angular/common/http';
import { Component, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { merge } from 'rxjs';
import { IWorker } from '../task.model';
import { Router } from '@angular/router';
import { TasksApiService } from '../../services/tasks-api.service';

@Component({
  selector: 'app-task-login',
  templateUrl: './task-login.component.html',
  styleUrls: ['./task-login.component.css']
})
export class TaskLoginComponent implements OnInit {
  readonly email = new FormControl('', [Validators.required, Validators.email]);
  form!: FormGroup;

  errorMessage = signal('');
  hide = signal(true);

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router,
    private tasksApiService: TasksApiService 
  ) {
    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
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

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  submit(): void {
    interface ILoginResult {
      message: string;
    }

    this.tasksApiService.logIn(this.form.getRawValue()).subscribe(res => {
      if (res.message === 'Success') {
        this.http.get<IWorker>('http://localhost:3000/api/workers', { withCredentials: true }).subscribe(workerRes => {
          console.log(workerRes.position);
          if (workerRes.position === 'Worker') {
            this.router.navigate(['/worker-schedule']);
          } else if (workerRes.position === 'Admin') {
            this.router.navigate(['/all-tasks']);
          }
        });
      }
    });
  }
}
