import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { TasksService } from './tasks.service';
import { TaskDetailComponent } from './task-detail/task-detail.component';

@NgModule({
  declarations: [AppComponent, TasksComponent, TaskDetailComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule {}
