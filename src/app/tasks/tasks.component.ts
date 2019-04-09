import { Component, OnInit } from '@angular/core';
import { Task } from '../model/Tasks';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  constructor(private tasksService: TasksService) {}

  ngOnInit() {
    this.tasksService
      .getAllTasks()
      .subscribe((tasks: Task[]) => (this.tasks = this.sortTasks(tasks)));
  }

  // Sorting task by state (Done to bottom)
  sortTasks(tasks: Task[]) {
    return tasks.sort((x, y) => {
      return x.state === y.state ? 0 : x.state ? 1 : -1;
    });
  }
}
