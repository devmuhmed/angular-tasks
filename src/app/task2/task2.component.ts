import { Component, OnInit } from '@angular/core';
import { Student } from '../_model/student';

@Component({
  selector: 'app-task2',
  templateUrl: './task2.component.html',
  styleUrls: ['./task2.component.css']
})
export class Task2Component implements OnInit {
  // source:string ="../assets/up/"
  // exten:string =".jpg"
  // i:string = "1"
  // img:any[]=[this.source+this.i+this.exten]
  addFlag = false
  editFlag = false
  detailsFlag = false
  detailsFlagCard = false
  img:any[]=["../assets/up/1.jpg","../assets/up/2.jpg","../assets/up/3.jpg","../assets/up/4.jpg","../assets/up/6.jpg","../assets/up/7.jpg"]
  students:Student[]=[
    new Student(1,"Mohamed",24,this.img[0]),
    new Student(2,"Ali",26,this.img[1]),
    new Student(3,"Adel",30,this.img[2]),
    new Student(4,"Moaz",19,this.img[3]),
    new Student(5,"khalifa",10,this.img[4]),
    new Student(6,"khalifa",40,this.img[5])
  ]
  studentDetails:Student=new Student(0,"",0,this.img[0])
  newStd:Student=new Student(0,"",0,this.img[0])
  //need to study
  // updateStd(id:any,name:any,age:any){
  //   if(id == this.newStd.id)
  //   this.newStd.age = age
  //   this.newStd.name = name.value
  //   console.log(this.newStd)
  // }
  showAdd(){
    this.addFlag = !this.addFlag
    this.editFlag = false
  }
  showEdit(){
    this.editFlag = !this.editFlag
    this.addFlag = false
  }
  showDetails(id:number){
    this.students.forEach((item)=>{
      if(item.id == id){
        this.detailsFlag = true
        this.studentDetails.id=item.id
        this.studentDetails.name=item.name
        this.studentDetails.age=item.age
      }
    })
  }
  showDetailsCard(id:number){
    this.students.forEach((item)=>{
      if(item.id == id){

        this.detailsFlagCard = true
        this.studentDetails.id=item.id
        this.studentDetails.name=item.name
        this.studentDetails.age=item.age
      }
    })
  }
  updateStd(){
    const student =  this.students.find((i)=>i.id == this.newStd.id)
     if(student){
       student.id = this.newStd.id
       student.name = this.newStd.name
       student.age = this.newStd.age
     }
    }
    //  const student = this.students.filter((value,key)=>{
    //    if (value.id == id){
    //      value.name == name
    //      value.age == age
    //    }
    //  })
  addStd(){
    const x = this.img[0]
    console.log(x)
    this.students.push(new Student(this.newStd.id,this.newStd.name,this.newStd.age,x))
  }
  deleteStd(id:number){
    if(confirm("are you sure to delete ")){
      let i = -1
      this.students.forEach(item => {
        i ++
        if (item.id == id){
          this.students.splice(i,1)
        }
      })
    }
  }
  constructor() { }

  ngOnInit(): void {
  }

}
