import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {
  @Input() image: any;
  @Input() description:any;
  constructor() { }

  ngOnInit(): void {
  }
  test(){
    document.getElementById('info').classList.remove('d-none')
  }
  test2(){
    document.getElementById('info').classList.add('d-none')
  }
}
