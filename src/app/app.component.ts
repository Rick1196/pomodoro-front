import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';
import { LanguageService } from './services/language/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'pomodoro-front';
  constructor(private language: LanguageService) {
    this.language.initializeLanguageApp();
  }
}
