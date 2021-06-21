import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TaskComponent } from './task/task.component';
import { Task2Component } from './task2/task2.component';
import { ListdepartmentComponent } from './task3/listdepartment/listdepartment.component';
import { AdddepartmentComponent } from './task3/adddepartment/adddepartment.component';
import { DetaildepartmentComponent } from './task3/detaildepartment/detaildepartment.component';
import { DeletedepartmentComponent } from './task3/deletedepartment/deletedepartment.component';
import { EditedepartmentComponent } from './task3/editedepartment/editedepartment.component';

@NgModule({
  declarations: [
    AppComponent,
    TaskComponent,
    Task2Component,
    ListdepartmentComponent,
    AdddepartmentComponent,
    DetaildepartmentComponent,
    DeletedepartmentComponent,
    EditedepartmentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
