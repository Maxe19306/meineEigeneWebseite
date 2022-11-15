import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  constructor(public main: AppComponent) {
  }
  placeholder = false;
  infoElPollo = false;
  infoJoin = false;
  infoPortfolio = false;
  angular = true;
  javascript = true;
  whiteMode = this.main.whiteMode;
  buttonJavascript = false;
  buttonAngular = false;


  ngOnInit(): void {
     }
     allProjects(){
      this.angular = true;
      this.javascript = true;
      this.buttonJavascript = false;
      this.buttonAngular = false;
     }
     AngularProjects(){
      this.angular = true;
      this.javascript = false;
      this.buttonJavascript = false;
      this.buttonAngular = true;
     }

     JavascriptsProjects(){
      this.angular = false;
      this.javascript = true;
      this.buttonJavascript = true;
      this.buttonAngular = false;
     }
    
     openInfoElPollo(){
      this.infoElPollo = true;
     }

     closeInfoElPollo(){
      this.infoElPollo = false;
     }

     openInfoJoin(){
      this.infoJoin = true;
     }
     closeInfoJoin(){
      this.infoJoin = false;
     }

     openInfoPortfolio(){
      this.infoPortfolio = true;
     }

     closeInfoPortfolio(){
      this.infoPortfolio = false;
     }
     openInfoPlaceholder(){
      this.placeholder = true;
     }

    closeInfoPlaceholder(){
      this.placeholder = false;
    } }
