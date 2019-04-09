import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Task } from '../model/Tasks';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css']
})
export class TaskDetailComponent implements OnInit {
  task: Task;
  constructor(private route: ActivatedRoute, private taskService: TasksService) {}

  ngOnInit() {
    this.getTask();
  }

  getTask() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.taskService.getTask(id).subscribe((task: Task) => (this.task = task));
  }
}
