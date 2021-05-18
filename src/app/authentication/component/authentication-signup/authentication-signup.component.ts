import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authentication-signup',
  templateUrl: './authentication-signup.component.html',
})
export class AuthenticationSignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log('Authentication signUp -- init life state');
  }

}
