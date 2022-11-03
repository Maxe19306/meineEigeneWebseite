import {Component} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  whiteMode = false;
  constructor(public translate: TranslateService) {
    // the lang to use, if the lang isn't available, it will use the current loader to get them
    
}

  title = 'meineEigeneWebseite';


}
