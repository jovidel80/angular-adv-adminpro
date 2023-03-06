import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  sumar = (a: number, b: number) => {
    return new Promise((resolve, reject) => {

      if (b === 0) {
        console.log('lanza error');
        
        reject('hay errorh')
      } else {

        resolve(a + b);
      }
      console.log('aqui');
      
    })
  }
}
