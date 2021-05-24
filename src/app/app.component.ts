import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'pomodoro-front';
  constructor(private cookieService: CookieService, private translate: TranslateService) {
    this.setUserLanguage();
  }

  private setUserLanguage() {
    let userLang = navigator.language.split('-')[0];
    if (userLang === null || userLang === undefined) {
      userLang = 'en';
    } else {
      // if user browser language is not supported
      if (!environment.languages.includes(userLang)) {
        userLang = 'en';
      }
    }
    this.cookieService.set('lang', userLang);
    this.translate.setDefaultLang(userLang);
  }
}
