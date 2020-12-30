import {
  Component
} from '@angular/core';

import {
  TranslateService
} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-basic-setup';
  constructor(
    public translate: TranslateService
  ) {

    // Add language which need to be added
    translate.addLangs(['en']);

    // Set Default Language as English
    translate.setDefaultLang('en');
  }

  switchLang(lang: string) {
    // Switch Language
    this.translate.use(lang);
  }
}