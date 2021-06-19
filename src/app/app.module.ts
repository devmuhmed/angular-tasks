import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { Task2Component } from './task2/task2.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    Task2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
