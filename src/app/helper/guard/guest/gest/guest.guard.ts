import { Injectable } from '@angular/core';
import {
  Router,
  CanLoad,
  Route,
} from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';
import { AuthenticationService } from 'src/app/services/authentication/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class GuestGuard implements CanLoad {
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
  ) {}
  canLoad(
      route: Route): Observable<boolean> {
    return this.authenticationService.isAuthenticated().pipe(map((user) => {
      if (user) {
        this.router.navigateByUrl('/board');
      }
      return (user)? false:true;
    }));
  }
}
