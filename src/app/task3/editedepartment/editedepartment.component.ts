import { Component, OnInit } from '@angular/core';
import { Department } from '../_models/department';
import { DepartmentService } from '../_services/department.service';

@Component({
  selector: 'app-editedepartment',
  templateUrl: './editedepartment.component.html',
  styleUrls: ['./editedepartment.component.css']
})
export class EditedepartmentComponent implements OnInit {
 editeDept:Department= new Department()
 edite(){
  this.deptsrc.editeDepartment(this.editeDept)
 }
  constructor(public deptsrc:DepartmentService) { }

  ngOnInit(): void {
  }

}
