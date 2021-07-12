import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/services/language/language.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-language-card',
  templateUrl: './language-card.component.html',
})
export class LanguageCardComponent {
  
  public languages:string[] = environment.languages;
  constructor(private languageService: LanguageService) { }
  changeLanguage(language:string):void{
    this.languageService.changeLanguage(language);
  }
}
