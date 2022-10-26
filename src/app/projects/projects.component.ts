import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  InfosProjects2 =[
    {
      image :"./../assets/img/ElPolloLoco.png",
      descriptions: "El Pollo Loco - Ein run-and-jump Spiel mit Javascript",
      LinkProject: "",
      LinkGit: "",
      Language:"javascript",
    },
    {
      image :"./../assets/img/Join.png",
      descriptions: "Join - eine App für die Zuordnung der Aufgaben",
      LinkProject: "",
      LinkGit: "",
      Language:"javascript",
    },
    {
      image :"./../assets/img/Join.png",
      descriptions: "Platzhalter - hier kommt die erste Angular App rein",
      LinkProject: "",
      LinkGit: "",
      Language:"angular",
    },
    {
      image :"./../assets/img/ElPolloLoco.png",
      descriptions: "Platzhalter 2 - hier kommt die zweite Angular App rein",
      LinkProject: "",
      LinkGit: "",
      Language:"angular",
    },
  ]


  InfosProjects = [
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

  angular = true;
  javascript = true;
  whiteMode = false;
  constructor() {
      }
 

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
