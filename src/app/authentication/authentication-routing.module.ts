import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestGuard } from '../helper/guard/guest/gest/guest.guard';
import { AuthenticationLoginComponent } from './component/authentication-login/authentication-login.component';
import { AuthenticationSignupComponent } from './component/authentication-signup/authentication-signup.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: AuthenticationLoginComponent,
        canActivate: [GuestGuard],
      },
      {
        path: 'signUp',
        component: AuthenticationSignupComponent,
        canActivate: [GuestGuard],
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {}
