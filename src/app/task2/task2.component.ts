import { Component, OnInit } from '@angular/core';
import { Student } from '../_model/student';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component implements OnInit {
  students:Student[]=[
    new Student(1,"Mohamed",24,"../assets/up/1.jpg"),
    new Student(2,"Ali",26,"../assets/up/2.jpg"),
    new Student(3,"Adel",30,"../assets/up/3.jpg"),
    new Student(4,"Moaz",19,"../assets/up/4.jpg"),
    new Student(5,"khalifa",10,"../assets/up/6.jpg"),
    new Student(6,"khalifa",40,"../assets/up/7.jpg")
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
