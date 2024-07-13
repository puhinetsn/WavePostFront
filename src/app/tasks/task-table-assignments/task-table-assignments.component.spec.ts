import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskTableAssignmentsComponent } from './task-table-assignments.component';

describe('TaskTableAssignmentsComponent', () => {
  let component: TaskTableAssignmentsComponent;
  let fixture: ComponentFixture<TaskTableAssignmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskTableAssignmentsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskTableAssignmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
