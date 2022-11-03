import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
@Component({
  selector: 'app-about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss']
})
export class AboutMeComponent implements OnInit{

  constructor(public main: AppComponent) { }
  whiteMode = this.main.whiteMode;
  ngOnInit(): void {
  }

}
