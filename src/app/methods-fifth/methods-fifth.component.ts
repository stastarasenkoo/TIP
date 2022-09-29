import { Component } from '@angular/core';

@Component({
  selector: 'app-methods-fifth',
  templateUrl: './methods-fifth.component.html',
  styleUrls: ['./methods-fifth.component.css']
})
export class MethodsFifthComponent   {

pickPicture(n:number) {
    if (document.images[3].src === document.images[n].src) {
        document.images[3].src = "";
    } else {
        document.images[3].src = document.images[n].src;
    }
}

changeScale(n:number, width:any, height:number) {
    if (width === 'auto') {
        document.images[n].style.width = width;
    } else {
        document.images[n].style.width = width + 'px';
    }
    document.images[n].style.height = height + 'px';
}

pictureReducer(n:number, action:any) {
    if (action) {
        document.images[n].src = './assets/selected.jpg';
    } else {
        document.images[n].src = './assets/unselected.jpg'
    }
}
}
