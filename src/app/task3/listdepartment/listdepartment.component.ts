import { Component, OnInit } from '@angular/core';
import { Department } from '../_models/department';
import { DepartmentService } from '../_services/department.service';

@Component({
  selector: 'app-listdepartment',
  templateUrl: './listdepartment.component.html',
  styleUrls: ['./listdepartment.component.css']
})
export class ListdepartmentComponent implements OnInit {
  dept:Department=new Department(1,"0",1)
  show(id:number){
    this.deptser.detailDepartment(id)
  }
  depts:Department[]=[]
  // deptser = new DepartmentService()
  //we depend on constructor to build objject in this case named by dependency injection(factory design pattern) on creation function that create object and passed it to me
  constructor(public deptser:DepartmentService) { }
  ngOnInit(): void {
    //intialization render
    // this.deptser.getDepartments()//services
    this.depts = this.deptser.getDepartments()
  }

}
