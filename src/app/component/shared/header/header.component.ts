import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import firebase from 'firebase/app';
import { Router } from '@angular/router';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  public imgProfileSrc: string | null = null;
  public cardProfileStatus = false;
  constructor(
    public authenticationService: AuthenticationService,
    private router: Router
  ) {
    this.authenticationService.getAuthenticationStatus().subscribe({
      next: (user: firebase.User) => {
        console.log('Header --- user data subscription', user);
        this.imgProfileSrc = user.photoURL;
      },
      error: (err: any) => {
        console.error('Header --- user data subscription', err);
      },
    });
  }

  public changeCardProfileStatus() {
    const nextStatus = !this.cardProfileStatus;
    console.log('Changing card status to', nextStatus);
    this.cardProfileStatus = nextStatus;
  }
}