import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../model/Tasks';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  @Input() task: Task;
  @Output() sortTasks = new EventEmitter();
  constructor() {}

  checkTask($event) {
    this.task.state = !this.task.state;
    this.sortTasks.emit($event);
  }
}
