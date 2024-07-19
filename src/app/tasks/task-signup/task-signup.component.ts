import { HttpClient } from '@angular/common/http';
import { ChangeDetectionStrategy, Component, OnInit, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { merge } from 'rxjs';

@Component({
  selector: 'app-task-signup',
  templateUrl: './task-signup.component.html',
  styleUrls: ['./task-signup.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TaskSignupComponent implements OnInit{

  form!: FormGroup;

  readonly email = new FormControl('', [Validators.required, Validators.email]);

  errorMessage = signal('');

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessage());
  }

  ngOnInit():void {
    this.form = this.formBuilder.group({
      firstName: '',
      lastName: '',
      middleName: '',
      email: this.email,
      position: '',
      rate: 0,
      password: '',
    });
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

  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  submit(): void {
    console.log(this.form.getRawValue());
    this.http.post('http://localhost:3000/api/auth/register', this.form.getRawValue())
      .subscribe(res => {
        console.log(res);
      })
  }
}
