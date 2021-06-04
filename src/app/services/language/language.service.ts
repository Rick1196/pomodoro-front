import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  constructor(
    private cookieService: CookieService,
    private translate: TranslateService,
  ) {}

  initializeLanguageApp(): void {
    if (
      this.currentLanguage() !== null &&
      this.currentLanguage() !== undefined &&
      this.currentLanguage() !== ''
    ) {
      this.translate.setDefaultLang(this.currentLanguage());
    } else {
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

  changeLanguage(lang: string): void {
    this.cookieService.set('lang', lang);
    this.cookieService.set('lang', lang);
    this.translate.setDefaultLang(lang);
    this.translate.resetLang(lang);
  }

  currentLanguage(): string {
    return this.cookieService.get('lang');
  }
}
