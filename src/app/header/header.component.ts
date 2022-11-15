import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  whiteMode = this.main.whiteMode;
  Darkmode = true;
  constructor(public main: AppComponent) {
   }

  ngOnInit(): void {}

  openSettings(){
    document.getElementById('settings').classList.toggle('d-none')
  }
  openMenu(){
    document.getElementById('menu').classList.toggle('menu')
  }
  darkmode(){
    if (this.main.whiteMode) {
     this.main.whiteMode = false;
     document.getElementById('mode').innerHTML = 'ON';
     }
  else{ 
    this.main.whiteMode = true;
    document.getElementById('mode').innerHTML = 'OFF'}
  }
}
