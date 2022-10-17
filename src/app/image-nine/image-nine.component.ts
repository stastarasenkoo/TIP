import { Component } from '@angular/core';

@Component({
  selector: 'app-image-nine',
  templateUrl: './image-nine.component.html',
  styleUrls: ['./image-nine.component.css']
})
export class ImageNineComponent {

  z:any;
  i:number=10
  a:number=0;
 
  setImage(n:number, action:boolean) {

    if(n==0)
    {
      this.i=10
    }
    if(n==1)
    {
      this.i=20
    }
    if(n==2)
    {
      this.i=30
    }
    if(n==3)
    {
      this.i=40
    }
    if(n==4)
    {
      this.i=50
    }

    this.a=this.i;

    clearTimeout(this.z);

    this.viewImages();
    
    if (action) {
        document.images[n].src = './assets/pen.jpg';
    } else {
        document.images[n].src = './assets/fon.jpg'
    }
}

setDefaultImage(n:number, action:boolean) {

  if (action) {
      document.images[n].src = './assets/pen.jpg';
  } else {
      document.images[n].src = './assets/fon.jpg'
  }
}

 viewImages() {
  console.log(this.i)
  document.images[5].src =`./assets/${this.i}.jpg`

  if (this.i == this.a+1 ) {
      this.i = this.a-1;
  }
  this.i++;

  this.z = setTimeout(()=>this.viewImages(),2000);
}
}
