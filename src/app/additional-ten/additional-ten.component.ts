import { Component } from '@angular/core';

@Component({
  selector: 'app-additional-ten',
  templateUrl: './additional-ten.component.html',
  styleUrls: ['./additional-ten.component.css']
})
export class AdditionalTenComponent {

  showList(): void {
    this.createList(this.getListFromLS())
    }

 createList(content:any) {
  let i:number = 1;
  console.log(content)
    for(let elem of content.list){
      if(i==8)
      {
        return;
      }
      let stroka: string = "";

      stroka+=`Second name: ${elem.name};  Hire date: ${elem.date}`
      stroka+='\n';
      document.getElementById(`elem${i}`)!.innerHTML= stroka;
      i++
    }
}

 getListFromLS() {
    return JSON.parse(localStorage.getItem("list")!);
}
}
