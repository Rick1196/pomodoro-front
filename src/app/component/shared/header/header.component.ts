import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import firebase from 'firebase/app';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  public imgProfileSrc:string|null = null;
  constructor(public authenticationService: AuthenticationService) {
    this.authenticationService.getAuthenticationStatus().subscribe({
      next: (user:firebase.User)=>{
        console.log('Header --- user data subscription', user);
        this.imgProfileSrc = user.photoURL;
      },
      error: (err: any)=>{
        console.error('Header --- user data subscription', err);
      },
    });
  }
}
