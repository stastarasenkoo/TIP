import { Component } from '@angular/core';

@Component({
  selector: 'app-simple-scripts',
  templateUrl: './simple-scripts.component.html',
  styleUrls: ['./simple-scripts.component.css']
})
export class SimpleScriptsComponent{

requestPersonalData() {
  let secondName = prompt("Введите свою фамилию");
  let gender = prompt("Введите свой пол");
  let age = prompt("Введите свой возраст");

  let isRight = confirm(`Фамилия: ${secondName}\nПол: ${gender}\nВозраст: ${age}\nВсе верно?`);

  if(isRight){
      alert(`Молодец, ${secondName}`);
  }
  else{
      alert("Ошибка в данных");
  }
}

calculateCircleSquare() {
  const PI : number = 3.14;
  let r : number = Number(prompt(`Введите радиус окружности`));

  let result = PI * Math.pow(r,2);

  alert(`Площадь окружности: ${result}`);
}
}
