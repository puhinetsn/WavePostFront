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

@NgModule({
  declarations: [
    AppComponent,
    TaskLoginComponent,
    TaskMainComponent,
    TaskListComponent
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
    MatListModule
  ],
  providers: [
    provideClientHydration(),
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
