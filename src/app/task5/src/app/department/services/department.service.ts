import { Injectable } from '@angular/core';
import { Department } from '../_models/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  private departments:Department[]=[
    new Department(100,"php",20),
    new Department(200,"php",30),
    new Department(300,"php",40),
  ]
  getDepartments(){
    return this.departments
  }
  addDepartment(d:Department){
    if(!this.departments.find(item => item.deptid == d.deptid))
      this.departments.push(new Department(d.deptid,d.deptname,d.capacity))
    else
      alert("your id is already exists")
  }
  detailsdepartment = new Department(1,"hjkh",2)
  getDepartmentDetails(id:number |undefined){
    this.departments.forEach(item =>{
      if (item.deptid == id)
        this.detailsdepartment = item
    })
    // this.detailsdepartment.deptid=0
  }
  constructor() { }
}
