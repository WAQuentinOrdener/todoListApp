import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { TasksService } from './tasks.service';
import { TaskDetailComponent } from './task-detail/task-detail.component';
import { TaskComponent } from './tasks/task/task.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, TasksComponent, TaskDetailComponent, TaskComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, ReactiveFormsModule],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule {}
