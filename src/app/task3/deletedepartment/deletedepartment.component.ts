import { Component, OnInit } from '@angular/core';
import { Department } from '../_models/department';
import { DepartmentService } from '../_services/department.service';

@Component({
  selector: 'app-deletedepartment',
  templateUrl: './deletedepartment.component.html',
  styleUrls: ['./deletedepartment.component.css']
})
export class DeletedepartmentComponent implements OnInit {
  delete:Department = new Department()
  deleteDept(){
    this.srcDept.deleteDepartment(this.delete)
  }
  constructor(public srcDept:DepartmentService) { }

  ngOnInit(): void {
  }

}
