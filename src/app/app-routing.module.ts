import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskMainComponent } from './tasks/task-main/task-main.component';
import { TaskLoginComponent } from './tasks/task-login/task-login.component';
import { TaskSignupComponent } from './tasks/task-signup/task-signup.component';
import { TaskPersonalScheduleComponent } from './tasks/task-personal-schedule/task-personal-schedule.component';
import { TaskListComponent } from './tasks/task-list/task-list.component';

const routes: Routes = [
  {path: '', component: TaskMainComponent},
  {path: 'login', component: TaskLoginComponent},
  {path: 'register', component: TaskSignupComponent},
  {path: 'worker-schedule', component: TaskPersonalScheduleComponent},
  {path: 'all-tasks', component: TaskListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
