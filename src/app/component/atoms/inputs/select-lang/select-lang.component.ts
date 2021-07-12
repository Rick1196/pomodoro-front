import { Component } from '@angular/core';
import { LanguageService } from 'src/app/services/language/language.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-select-lang',
  templateUrl: './select-lang.component.html',
})
export class SelectLangComponent {
  public selectedLanguage:string;
  public languages = environment.languages;
  constructor(private language: LanguageService) {
    this.selectedLanguage = this.language.currentLanguage();
  }

  public changeLanguage(): void {
    this.language.changeLanguage(this.selectedLanguage);
  }
}
