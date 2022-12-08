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
  angular = true;
  javascript = true;
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
    
     }
