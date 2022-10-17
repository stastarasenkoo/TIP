import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-localstorage-ten',
  templateUrl: './localstorage-ten.component.html',
  styleUrls: ['./localstorage-ten.component.css']
})
export class LocalstorageTenComponent {

  form1 = new FormGroup({
    secondName: new FormControl(),
    date: new FormControl(),
    vacation: new FormControl()
  });

  form2 = new FormGroup({
    secondName: new FormControl(),
    date: new FormControl(),
    vacation: new FormControl()
  });

  form3 = new FormGroup({
    secondName: new FormControl(),
    date: new FormControl(),
    vacation: new FormControl()
  });

  form4 = new FormGroup({
    secondName: new FormControl(),
    date: new FormControl(),
    vacation: new FormControl()
  });

  form5 = new FormGroup({
    secondName: new FormControl(),
    date: new FormControl(),
    vacation: new FormControl()
  });

  form6 = new FormGroup({
    secondName: new FormControl(),
    date: new FormControl(),
    vacation: new FormControl()
  });

  form7 = new FormGroup({
    secondName: new FormControl(),
    date: new FormControl(),
    vacation: new FormControl()
  });

  form8 = new FormGroup({
    monthNumber: new FormControl(),
    kvartal: new FormControl(),
  });  

  forms:FormGroup[]=[
    this.form1,
    this.form2,
    this.form3,
    this.form4,
    this.form5,
    this.form6,
    this.form7
  ];

  printSecondNameInMonth(){
    document.getElementById("secondName")!.innerHTML = 'In selected month';
    for(let form of this.forms) { 
      let date = new Date(form.value.date)
      if(date.getMonth() === (this.form8.value.monthNumber-1)) {
        document.getElementById("secondName")!.innerHTML += ` ${form.value.secondName}`;
      }
   }
};

  getVacationNextYear(vacationStart:Date, secondName:string){
  let date = new Date();
  if(date.getFullYear() < vacationStart.getFullYear()){
    document.getElementById("year")!.innerHTML += ` ${secondName}`;
  }
  }

printSecondNameInQuarter(vacationEnd:Date) {
  for(let form of this.forms) { 
    let date = new Date(form.value.vacation)
    console.log(date.getMonth()) 
    console.log(this.form8.value.monthNumber)
    if(this.form8.value.kvartal == 1){
      if(vacationEnd.getMonth() === 0 || vacationEnd.getMonth()==1 || vacationEnd.getMonth() == 2) {
        document.getElementById("kvartal")!.innerHTML += ` ${form.value.secondName}`;
        continue;
      }
    }
    if(this.form8.value.kvartal == 2){
      if(vacationEnd.getMonth() == 3 || vacationEnd.getMonth()==4 || vacationEnd.getMonth() == 5) {
        document.getElementById("kvartal")!.innerHTML += ` ${form.value.secondName}`;
        continue;
      }
    }
    if(this.form8.value.kvartal == 3){
      if(vacationEnd.getMonth() == 6 || vacationEnd.getMonth()==7 || vacationEnd.getMonth() == 8) {
        document.getElementById("kvartal")!.innerHTML += ` ${form.value.secondName}`;
        continue;
      }
    }
    if(this.form8.value.kvartal == 4){
      if(vacationEnd.getMonth() === 9 || vacationEnd.getMonth()===10 || vacationEnd.getMonth() === 11) {
        document.getElementById("kvartal")!.innerHTML += ` ${form.value.secondName}`;
        continue;
      }
    }
 }
}

calculateVacation(){
  let currentDate:any = new Date();

  document.getElementById("year")!.innerHTML = `In next year`;
  document.getElementById("kvartal")!.innerHTML = "";
  document.getElementById("kvartal")!.innerHTML = `Ends in this quarter`;
  this.printSecondNameInMonth()

  for(let form of this.forms) {  
      let startDate:any = new Date(form.value.date)
      let vacationStart = new Date(startDate);

      vacationStart.setFullYear(currentDate.getFullYear())

      vacationStart.setMonth(vacationStart.getMonth()+11);

      let vacationEnd = new Date(vacationStart);

      this.printSecondNameInQuarter(vacationEnd);
      
      this.getVacationNextYear(vacationStart, form.value.secondName);

     vacationEnd.setMonth(vacationEnd.getMonth()+1)

      form.setValue({
      secondName: form.value.secondName,
      date:form.value.date,
      vacation: vacationStart.toDateString()
     })
    }

    this.SetListOfEmployes();
  };

  SetListOfEmployes(){
    const obj:any = {
      list: []
    }
      for(let form of this.forms) { 
        obj.list.push({
          name: form.value.secondName,
          date: form.value.date
      })
      }; 

      localStorage.setItem("list", JSON.stringify(obj))     
   }

  
}
