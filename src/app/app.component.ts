import { Component, OnInit } from '@angular/core';
import { TasksService } from './tasks.service';
import { Task } from './model/Tasks';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private tasksService: TasksService) {}

  ngOnInit() {
    this.tasksService
      .getAllTasks()
      .subscribe((tasks: Task[]) => (this.tasks = this.sortTasks(tasks)));
  }

  sortTasks(tasks: Task[]) {
    return tasks.sort((x, y) => {
      return x.state === y.state ? 0 : x.state ? 1 : -1;
    });
  }
}
