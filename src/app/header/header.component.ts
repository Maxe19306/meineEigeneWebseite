import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  whiteMode = this.main.whiteMode;
  constructor(public main: AppComponent) {
   }

  ngOnInit(): void {
    console.log(this.whiteMode)
  }

  openSettings(){
    document.getElementById('settings').classList.toggle('d-none')
  }
  huhu(){
    console.log(this.main.whiteMode)
  }
  darkmode(){
    if (this.main.whiteMode) {
     this.main.whiteMode = false;
     }
  else{ 
    this.main.whiteMode = true;}
  }
}
