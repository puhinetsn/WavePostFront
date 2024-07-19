import { HttpClient } from '@angular/common/http';
import { Component, signal} from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {merge, switchMap} from 'rxjs';

@Component({
  selector: 'app-task-login',
  templateUrl: './task-login.component.html',
  styleUrls: ['./task-login.component.css']  
})
export class TaskLoginComponent {
  readonly email = new FormControl('', [Validators.required, Validators.email]);
  form!: FormGroup;

  errorMessage = signal('');

  constructor(
    private formBuilder: FormBuilder,
    private http: HttpClient
  ) {
    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
  }

  updateErrorMessage() {
    if (this.email.hasError('required')) {
      this.errorMessage.set('You must enter an adress');
    } else if (this.email.hasError('email')) {
      this.errorMessage.set('Not a valid email');
    } else {
      this.errorMessage.set('');
    }
  }

  hide = signal(true);

  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: '',
      password: ''
    })
  }

  submit(): void{
    console.log(this.form.getRawValue());
    this.http.post('http://localhost:3000/api/auth/login', this.form.getRawValue(), 
    {withCredentials: true}).subscribe(res => {
        console.log(res);
      })
  }
}


