import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tasks, Task } from './model/Tasks';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  constructor(private httpClient: HttpClient) {}
  /* getAllTasks(): Observable<object> {
    return this.httpClient.get('api/tasks');
  } */

  getAllTasks(): Observable<Task[]> {
    return Observable.create(observer => {
      observer.next(tasks);
    });
  }
}
