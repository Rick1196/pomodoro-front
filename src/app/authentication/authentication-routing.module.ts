import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationLoginComponent } from './component/authentication-login/authentication-login.component';
import { AuthenticationSignupComponent } from './component/authentication-signup/authentication-signup.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: AuthenticationLoginComponent,
      },
      {
        path: 'signUp',
        component: AuthenticationSignupComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthenticationRoutingModule {}
