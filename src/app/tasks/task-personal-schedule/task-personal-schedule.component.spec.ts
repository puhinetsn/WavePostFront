import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskPersonalScheduleComponent } from './task-personal-schedule.component';

describe('TaskPersonalScheduleComponent', () => {
  let component: TaskPersonalScheduleComponent;
  let fixture: ComponentFixture<TaskPersonalScheduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TaskPersonalScheduleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskPersonalScheduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
