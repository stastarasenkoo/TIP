import { Component } from '@angular/core';

@Component({
  selector: 'app-controls-seventh',
  templateUrl: './controls-seventh.component.html',
  styleUrls: ['./controls-seventh.component.css']
})
export class ControlsSeventhComponent  {

  check1:any;
  check2:any;
  check3:any;
  check4:any;
  check5:any;
  check6:any;

  grade1:any;
  grade2:any;
  grade3:any;
  grade4:any;
  grade5:any;
  grade6:any;
  grade7:any;
  grade8:any;
  grade9:any;
  grade10:any;
  grade11:any;
  grade12:any;
  grade13:any;
  grade14:any;
  grade15:any;
  grade16:any;
  grade17:any;
  grade18:any;

  secondName:any;
  schoolNumber:any;
  
  
  setDefault(checkModel:boolean, name:string) {
    if(checkModel && name === "check1"){
      this.grade1=false;
      this.grade2=false;
      this.grade3=false;
    }
    if(checkModel && name === "check2"){
      this.grade4=false;
      this.grade5=false;
      this.grade6=false;
    } 
    if(checkModel && name === "check3"){
      this.grade7=false;
      this.grade8=false;
      this.grade9=false;
    } 
    if(checkModel && name === "check4"){
      this.grade10=false;
      this.grade11=false;
      this.grade12=false;
    } 
    if(checkModel && name === "check5"){
      this.grade13=false;
      this.grade14=false;
      this.grade15=false;
    } 
    if(checkModel && name === "check6"){
      this.grade16=false;
      this.grade17=false;
      this.grade18=false;
    }    
  }

  portionClickHandler(model:any, event:any) {
    if (model) {

    } 
    else {
      event.preventDefault();
    }
}

  calculate(check1: any,check2: any,check3: any,check4: any,check5: any,check6: any,grade1: any,grade2: any,grade3: any,grade4: any,grade5: any,grade6: any,grade7: any,grade8: any,grade9: any,grade10: any,grade11: any,grade12: any,grade13: any,grade14: any,grade15: any,grade16: any,grade17: any,grade18: any) {
    let gradeSum:number = 0;
    let group:number = 0;
    if(check1)
    {
      if(grade1){
        gradeSum+=1/3;
      }
      else if(grade2){
        gradeSum+=2/3;
      }
      else{
        gradeSum+=1;
      }      
    }
    if(check2)
    {
      if(grade4){
        gradeSum+=1/3;
      }
      else if(grade5){
        gradeSum+=2/3;
      }
      else{
        gradeSum+=1;
      }      
    }
    if(check3)
    {
      if(grade7){
        gradeSum+=1/3;
      }
      else if(grade8){
        gradeSum+=2/3;
      }
      else{
        gradeSum+=1;
      }      
    }
    if(check4)
    {
      if(grade10){
        gradeSum+=1/3;
      }
      else if(grade11){
        gradeSum+=2/3;
      }
      else{
        gradeSum+=1;
      }      
    }
    if(check5)
    {
      if(grade13){
        gradeSum+=1/3;
      }
      else if(grade14){
        gradeSum+=2/3;
      }
      else{
        gradeSum+=1;
      }      
    }
    if(check6)
    {
      if(grade16){
        gradeSum+=1/3;
      }
      else if(grade17){
        gradeSum+=2/3;
      }
      else{
        gradeSum+=1;
      }      
    }
    if(gradeSum == 6) {
      group=1;
    }
    else if(gradeSum < 6 && gradeSum>4.3333){
      group=2;
    }
    else if(gradeSum < 4 && gradeSum > 3.9998 ){
      group=3;
    }
    else{
      group=4;
    }

    document.getElementById("secondName")!.innerHTML = `Second name: ${this.secondName}`;
    document.getElementById("schoolNumber")!.innerHTML = `School number: ${this.schoolNumber}`;;
    document.getElementById("overallScore")!.innerHTML = `Overall score: ${gradeSum}`;
    document.getElementById("group")!.innerHTML = `Group: ${group}`;
}
}
