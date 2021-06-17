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
  startShow(image:HTMLImageElement,prv:HTMLInputElement,play:HTMLInputElement,stop:HTMLInputElement,next:HTMLInputElement){
    if (this.t === null){
      this.t=setInterval(()=>{
        this.goNext(image)},1000)
      // this.im=["assets/up/"+this.i+++".jpg"]
      prv.style.display = "none"
      play.style.display = "none"
      stop.style.display = "inline-block"
      next.style.display = "none"
    }
  }
  goNext(image:HTMLImageElement){
    this.i++
    if(this.i >= this.img.length){this.i = 0 }
    image.src = this.img[this.i]
  }
  prev(image:HTMLImageElement){
    this.i--
    if(this.i < 0){this.i = this.img.length-1}
    image.src = this.img[this.i]
  }
  //conflict between start and (next,prev) must stop first then next or prev
  stopShow(prv:HTMLInputElement,play:HTMLInputElement,stop:HTMLInputElement,next:HTMLInputElement){
    clearInterval(this.t)
    prv.style.display = "inline-block"
    play.style.display = "inline-block"
    stop.style.display = "none"
    next.style.display = "inline-block"
    this.t=null
  }
}
