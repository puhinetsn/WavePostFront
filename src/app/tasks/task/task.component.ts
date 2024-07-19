import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IAssignment } from '../task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() task!: IAssignment; 

}
