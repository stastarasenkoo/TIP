import { Component } from '@angular/core';

@Component({
  selector: 'app-loops-four',
  templateUrl: './loops-four.component.html',
  styleUrls: ['./loops-four.component.css']
})
export class LoopsFourComponent {

  stroka:string="";

  printButton() {
    let result = confirm("Press any button");
    if(result){
      document.getElementById("box")!.innerHTML="Ok"
    }
    else{
      document.getElementById("box")!.innerHTML="Cancel"
    }
  }

  printName() {
  while(true)
  {  
    let chat = document.getElementById("fio");

    console.log(chat);

    let result = prompt("Enter your name")
    
    let blockOne = document.createElement('div');

    if(result==null){
      break;
    }
    else{
      this.stroka+=result;
      this.stroka+='\n';
      console.log(this.stroka);
      blockOne.textContent = result;
      chat!.append(blockOne);
    }

    let secondResult = prompt("Enter your second name")

    let blockTwo = document.createElement('div');

    if(secondResult==null){
      break;
    }
    else{
      this.stroka+=secondResult;
      this.stroka+='\n';
      console.log(this.stroka);
      blockTwo.textContent = secondResult;
      chat!.append(blockTwo);    
    }
  }    
  }

}
