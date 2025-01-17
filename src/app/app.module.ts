import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TaskLoginComponent } from './tasks/task-login/task-login.component';
import { TaskMainComponent } from './tasks/task-main/task-main.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatRippleModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import { TaskListComponent } from './tasks/task-list/task-list.component';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { TaskDetailsComponent } from './tasks/task-details/task-details.component';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatCardModule } from '@angular/material/card';
import { TaskAssignmentsComponent } from './tasks/task-assignments/task-assignments.component';
import {MatTableModule} from '@angular/material/table';
import { TaskSignupComponent } from './tasks/task-signup/task-signup.component';
import {MatRadioModule} from '@angular/material/radio';
import { TaskComponent } from './tasks/task/task.component';
import { WorkerDataComponent } from './tasks/worker-data/worker-data.component';
import { TaskPersonalScheduleComponent } from './tasks/task-personal-schedule/task-personal-schedule.component';
import { TaskTableAssignmentsComponent } from './tasks/task-table-assignments/task-table-assignments.component';
import { TaskHeaderComponent } from './tasks/task-header/task-header.component';
import { HttpClientModule } from '@angular/common/http';
import {TaskAssignWorkersTableComponent} from "./tasks/task-assign-workers-table/task-assign-workers-table.component";
import {MatSort} from "@angular/material/sort";


@NgModule({
  declarations: [
    AppComponent,
    TaskLoginComponent,
    TaskMainComponent,
    TaskListComponent,
    TaskDetailsComponent,
    TaskAssignmentsComponent,
    TaskSignupComponent,
    TaskComponent,
    WorkerDataComponent,
    TaskPersonalScheduleComponent,
    TaskTableAssignmentsComponent,
    TaskHeaderComponent,
    TaskAssignWorkersTableComponent,
    TaskAssignWorkersTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatButtonModule,
    MatRippleModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSelectModule,
    FormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatPaginatorModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatRadioModule,
    MatTableModule,
    HttpClientModule,
    MatSort
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
