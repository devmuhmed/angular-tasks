import { Injectable } from '@angular/core';
import { Department } from '../_models/department';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {
  // array of department contain my data
  private departments:Department[]=[
    new Department(1,"Javascript",2),
    new Department(2,"Nodejs",1),
    new Department(3,"Bootstrap",1),
    new Department(4,"Angular",2),
    new Department(5,"freelance",1),
  ]
  getDepartments(){
    return this.departments
  }
  addDepartments(d:Department){
    if (!this.departments.find(item =>item.deptId == d.deptId)){
      this.departments.push(new Department(d.deptId,d.deptName,d.deptCapacity))
    }
  }
  detailDep:Department = new Department(1,"test",2)
  detailDepartment(id:number){
    this.departments.forEach(item => {
      if(item.deptId == id){
        this.detailDep = item;
        console.log(this.detailDep)
      }
    });
  }
  editeDepartment(d:Department){
    let i = -1
    this.departments.forEach(item => {
      i ++
      if (item.deptId == d.deptId){
        item.deptName = d.deptName
        item.deptCapacity = d.deptCapacity
      }
    })
  }
  deleteDepartment(d:Department){
    if(confirm("are you sure to delete ")){
      let i = -1
      this.departments.forEach(item => {
        i ++
        if (item.deptId == d.deptId){
          this.departments.splice(i,1)
        }
      })
    }
  }
  constructor() { }
}
