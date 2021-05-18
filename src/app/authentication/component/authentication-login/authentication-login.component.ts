import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authentication-login',
  templateUrl: './authentication-login.component.html',
})
export class AuthenticationLoginComponent implements OnInit {
  constructor() { }

  ngOnInit(): void {
    console.log('Authentication login -- init life state');
  }
}
