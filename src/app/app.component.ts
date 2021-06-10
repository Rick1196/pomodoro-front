import { Component } from '@angular/core';
import { AuthenticationService } from './services/authentication/authentication.service';
import { LanguageService } from './services/language/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'pomodoro-front';
  constructor(private language: LanguageService, private authenticationService: AuthenticationService) {
    this.language.initializeLanguageApp();
    this.authenticationService.getAuthenticationStatus().subscribe({
      next: (data:any) => {
        console.log(data);
      },
    });
  }
}
