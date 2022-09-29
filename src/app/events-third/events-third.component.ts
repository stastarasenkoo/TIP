import { Component } from '@angular/core';

@Component({
  selector: 'app-events-third',
  templateUrl: './events-third.component.html',
  styleUrls: ['./events-third.component.css']
})

export class EventsThirdComponent{
  
  x1Text:any;
  y1Text:any;
  x2Text:any;
  y2Text:any;
  x3Text:any;
  y3Text:any;
  Result:any;


  calculateArea() {

    let a:number = this.calculateLength(this.x1Text, this.y1Text, this.x2Text, this.y2Text);
    let b:number = this.calculateLength(this.x2Text, this.y2Text, this.x3Text, this.y3Text);
    let c:number = this.calculateLength(this.x1Text, this.y1Text, this.x3Text, this.y3Text);
    let p:number = (a + b + c) / 2;

    let result = Math.sqrt((p*(p-a)*(p-b)*(p-c))).toFixed(0);
    document.getElementById("box")!.innerHTML=result.toString();
}

calculateLength(x1:string, y1:string, x2:string, y2:string):number {
    return Math.sqrt((+x2 - +x1)*(+x2 - +x1) + (+y2 - +y1)*(+y2 - +y1));
}

calculateOrigin(x:string, y:string) {
    alert("Distance to origin: " + this.calculateLength(x, y, "0", "0").toFixed(2));
}

swap(x:string, y:string){

  if(x === undefined || y === undefined){
    return;
  }
    let tmp = x;   
    this.x2Text=y;
    this.y2Text=tmp;
}
}
