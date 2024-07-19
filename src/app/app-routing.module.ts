import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskMainComponent } from './tasks/task-main/task-main.component';
import { TaskLoginComponent } from './tasks/task-login/task-login.component';
import { TaskSignupComponent } from './tasks/task-signup/task-signup.component';

const routes: Routes = [
  {path: '', component: TaskMainComponent},
  {path: 'login', component: TaskLoginComponent},
  {path: 'register', component: TaskSignupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
