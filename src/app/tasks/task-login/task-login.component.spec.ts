import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskLoginComponent } from './task-login.component';

describe('TaskLoginComponent', () => {
  let component: TaskLoginComponent;
  let fixture: ComponentFixture<TaskLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
