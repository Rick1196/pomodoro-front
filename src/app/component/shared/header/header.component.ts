import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import firebase from 'firebase/app';
import { Router } from '@angular/router';
import { SideMenuService } from 'src/app/services/side-menu/side-menu.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  public imgProfileSrc: string | null = null;
  public cardProfileStatus = false;
  constructor(
    public authenticationService: AuthenticationService,
    private router: Router,
    public menuService: SideMenuService
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

  public toggleMenu():void{
    this.menuService.menuStatus = !this.menuService.menuStatus;
    this.menuService.menuStatusObservable.next(this.menuService.menuStatus);
  }
}
