import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';
import firebase from 'firebase/app';
import { ActivatedRoute, Router } from '@angular/router';
import { SideMenuService } from 'src/app/services/side-menu/side-menu.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  public imgProfileSrc: string | null = null;
  public cardProfileStatus = false;
  public languageMenuStatus = false;
  public currentTeam:string = '';
  constructor(
    public authenticationService: AuthenticationService,
    private router: Router,
    public menuService: SideMenuService,
    public route: ActivatedRoute
  ) {
    this.route.paramMap.subscribe({
      next: (params) =>{ 
        this.currentTeam = params.get('id');
        console.log('Current team', this.currentTeam, params);
      },
      error: (err) => console.error(err)      
    })
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

  public changeCardProfileStatus():void {
    const nextStatus = !this.cardProfileStatus;
    this.cardProfileStatus = nextStatus;
  }

  public changeLanguageMenuStatus():void{
    const nextStatus = !this.languageMenuStatus;
    this.languageMenuStatus = nextStatus;
  }

  public toggleMenu():void{
    this.menuService.menuStatus = !this.menuService.menuStatus;
    this.menuService.menuStatusObservable.next(this.menuService.menuStatus);
  }
}
