import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  english = false;
  constructor(public translate: TranslateService) {
    this.english = JSON.parse(localStorage.getItem('translation'));
    if(this.english){
      this.translate.use('en')
    }
}

  title = 'meineEigeneWebseite';


}
