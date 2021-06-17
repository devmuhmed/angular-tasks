import { Component } from '@angular/core';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
  insert:string="";
  typeInConsole(data:any){
    console.log(data)
  }
  sendWrittenByKeyUp(data:any){
    console.log(data.target.value)
  }
  sendWrittenByReference(data:any){
    console.log(data.value)
  }
  img:string[]=["assets/up/1.jpg", "assets/up/2.jpg", "assets/up/3.jpg", "assets/up/4.jpg", "assets/up/6.jpg", "assets/up/7.jpg"]
  // im:any[]=["assets/up/"+this.i+".jpg"]
  i:number = 0
  t:any =null
  goNext(next:HTMLImageElement){
    this.i++
    if(this.i >= this.img.length){this.i = 0 }
    next.src = this.img[this.i]
  }
  prev(back:HTMLImageElement){
    this.i--
    if(this.i < 0){this.i = this.img.length-1}
    back.src = this.img[this.i]
  }
  //conflict between start and (next,prev) must stop first then next or prev
  startShow(next:HTMLImageElement){
    if (this.t === null){
      this.t=setInterval(()=>{
        this.i++
        if(this.i >= this.img.length){this.i = 0 }
          next.src = this.img[this.i]
          // this.im=["assets/up/"+this.i+++".jpg"]
      },1000)
    }
  }
  stopShow(){
    clearInterval(this.t)
    this.t=null
  }
}
