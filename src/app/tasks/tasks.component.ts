import { Component, OnInit } from '@angular/core';
import { Task } from '../model/Tasks';
import { TasksService } from '../tasks.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  openForm = false;
  addTaskForm = new FormGroup({
    title: new FormControl('', Validators.required),
    description: new FormControl('')
  });
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

  // Add new Task based on the form the close the form
  saveNewTask() {
    const newTask: Task = new Task(
      this.tasks.length + 1,
      this.addTaskForm.get('title').value,
      this.addTaskForm.get('description').value
    );

    // Insert newly created task to first index of array
    this.tasks.splice(0, 0, newTask);
    this.openForm = false;
  }
}
