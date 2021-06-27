import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../services/department.service';
import { Department } from '../_models/department';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  depts:Department[]=[]
  show(id:number | undefined){
    this.deptser.getDepartmentDetails(id)
  }
  constructor(public deptser:DepartmentService) { }
  ngOnInit(): void {
    this.depts = this.deptser.getDepartments()
  }

}
