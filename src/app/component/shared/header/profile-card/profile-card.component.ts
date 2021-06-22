import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import firebase from 'firebase/app';
@Component({
  selector: 'app-profile-card',
  templateUrl: './profile-card.component.html',
})
export class ProfileCardComponent {
  public imgProfileSrc: string | null = null;
  public userData: firebase.User | null = null;
  public cardProfileStatus = false;
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
  ) {
    this.authenticationService.getAuthenticationStatus().subscribe({
      next: (user: firebase.User) => {
        console.log('Header --- user data subscription', user);
        this.userData = user;
      },
      error: (err: any) => {
        console.error('Header --- user data subscription', err);
      },
    });
  }

  async signOut(): Promise<void> {
    await this.authenticationService.signOut();
    this.router.navigateByUrl('/');
  }
}
