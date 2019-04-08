import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../model/Tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  @Input() task: Task;
  @Output() sortTasks = new EventEmitter();
  constructor() {}

  checkTask($event) {
    this.task.state = !this.task.state;
    this.sortTasks.emit($event);
  }
}
