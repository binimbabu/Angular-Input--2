import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  titleValue:any;
  parentTitle:any;
  constructor(){
   
  }
  passValue(value:any){
    this.parentTitle = value;
  }
}
