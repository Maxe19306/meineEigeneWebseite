import { Component, OnInit} from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})


export class HeaderComponent implements OnInit {

english = this.main.english

  constructor(public main: AppComponent) {
   }
   
  ngOnInit(): void {}

  burgerMenu = false;


  openBurgerMenu(){
    this.burgerMenu = true;
  }

  closeBurgerMenu(){
    this.burgerMenu = false;
  }

  germanLanguage(){
    this.main.translate.use('de')
    this.main.english = false;
    let english = JSON.stringify(this.main.english)
    localStorage.setItem('translation', english)
  }

  englishLanguage(){
    this.main.translate.use('en')
    this.main.english = true;
    let english = JSON.stringify(this.main.english)
    localStorage.setItem('translation', english)
  }
  
}
