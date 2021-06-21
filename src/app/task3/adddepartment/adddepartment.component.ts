import { Component, OnInit } from '@angular/core';
import { Department } from '../_models/department';
import { DepartmentService } from '../_services/department.service';

@Component({
  selector: 'app-adddepartment',
  templateUrl: './adddepartment.component.html',
  styleUrls: ['./adddepartment.component.css']
})
export class AdddepartmentComponent implements OnInit {
  //create object to binding my data from html file
  newDept:Department=new Department()
  save(){
    this.deptser.addDepartments(this.newDept)
  }
  constructor(public deptser:DepartmentService) { }

  ngOnInit(): void {
  }

}
