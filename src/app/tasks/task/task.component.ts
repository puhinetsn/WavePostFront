import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IAssignment } from '../task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() task!: IAssignment;
  @Output() taskClicked = new EventEmitter<string>();

  onClick(): void {
    this.taskClicked.emit(this.task._id);
  }
}
