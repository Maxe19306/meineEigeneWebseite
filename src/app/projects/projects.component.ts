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
  
  angular = false;
  javascript = true;
  whiteMode = this.main.whiteMode;

  InfosProjects2: any[] =[
    {
      LinkProject: "",
      LinkGit: "https://github.com/Maxe19306/El-Pollo-Loco",
      Language:"javascript",
    },
    {
      image :"./../assets/img/Join.png",
      descriptions: "Join - eine App für die Zuordnung der Aufgaben",
      LinkProject: "",
      LinkGit: "https://github.com/Maxe19306/Join",
      Language:"javascript",
    },
    {
      image :"./../assets/img/Join.png",
      descriptions: "Platzhalter - hier kommt die erste Angular App rein",
      LinkProject: "",
      LinkGit: "",
      Language: 'angular',
    },
    {
      image :"./../assets/img/ElPolloLoco.png",
      descriptions: "Platzhalter 2 - hier kommt die zweite Angular App rein",
      LinkProject: "",
      LinkGit: "",
      Language:"angular",
    },
  ]


  image = [
    './../assets/img/ElPolloLoco.png',
    './../assets/img/Join.png',
    './../assets/img/Join.png',
    './../assets/img/ElPolloLoco.png'
  ]

  description= [
    'El Pollo Loco - Ein run-and-jump Spiel mit Javascript',
    'Join - eine App für die Zuordnung der Aufgaben',
    'Platzhalter - hier kommt die erste Angular App rein',
    'Platzhalter 2 - hier kommt die zweite Angular App rein',
  ]

  language=[
    'javascript',
    'javascript',
    'angular',
    'angular',
  ]
 

  ngOnInit(): void {
     }
     allProjects(){
      this.angular = true;
      this.javascript = true;
     }
     AngularProjects(){
      this.angular = true;
      this.javascript = false;
     }

     JavascriptsProjects(){
      this.angular = false;
      this.javascript = true;
     }
    
    }
