import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthenticationRoutingModule } from './authentication-routing.module';
import { AuthenticationHomeComponent } from './component/authentication-home/authentication-home.component';
import { AuthenticationLoginComponent } from './component/authentication-login/authentication-login.component';
import { AuthenticationSignupComponent } from './component/authentication-signup/authentication-signup.component';


@NgModule({
  declarations: [
    AuthenticationHomeComponent,
    AuthenticationLoginComponent,
    AuthenticationSignupComponent,
  ],
  imports: [
    CommonModule,
    AuthenticationRoutingModule,
  ],
})
export class AuthenticationModule { }
