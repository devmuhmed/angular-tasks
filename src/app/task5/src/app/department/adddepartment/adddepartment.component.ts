import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DepartmentService } from '../services/department.service';
import { Department } from '../_models/department';

@Component({
  selector: 'app-adddepartment',
  templateUrl: './adddepartment.component.html',
  styleUrls: ['./adddepartment.component.css']
})
export class AdddepartmentComponent implements OnInit {
  newdept:Department = new Department()
  constructor(public deptser:DepartmentService,public r:Router) { }
  add(){
    this.deptser.addDepartment(this.newdept)
    this.r.navigateByUrl("/departments")
  }
  ngOnInit(): void {
  }

}
