import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  whiteMode = false;
  constructor() {
   }

  ngOnInit(): void {
  }

  openSettings(){
    document.getElementById('settings').classList.toggle('d-none')
  }


  darkmode(){
    if (this.whiteMode) {
     this.whiteMode = false;
    }
  else{ 
    this.whiteMode = true;}
  }
}
