import { Component, Type } from '@angular/core';

@Component({
  selector: 'app-array-sixth',
  templateUrl: './array-sixth.component.html',
  styleUrls: ['./array-sixth.component.css']
})
export class ArraySixthComponent {

  min:any;
  max:any;
  length:any;


  sum(){
    let arr:Array<number> = [];

    while(true){
      let element = prompt("Enter array element");
      if(element === "" || element === null || isNaN(+element)) {
        break;
      }
      else{
        arr.push(+element);
      }
    }
    
    let sum = 0; 
    for(let i = 0; i < arr.length; i++){ 
      sum += arr[i];
    }
    
    document.getElementById("sum")!.innerHTML=sum.toString();
}

createArray(min:number,max:number,length:number) {
  const arr = [];
  while (length--) {
      arr.push((Math.random() * (+max - +min) + +min).toFixed(0))
  }
  console.log("Созданный массив:")
  console.log(arr);
  return arr;
}

isEven(element:number):boolean {
  return element % 2 == 0;
}

filt(func:any, arr:any) {
  let newArr = [];


  for(let i = 0; i < arr.length; i++){ 
    if(func(arr[i])){
      newArr.push(arr[i])
    }
  }
  
  let array = document.getElementById("array");
  array!.innerHTML="";

  for(let i = 0; i < newArr.length; i++){
    array!.append(newArr[i].toString() + " ")
  }
}
}
