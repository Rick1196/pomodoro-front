import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import firebase from 'firebase/app';
@Component({
  selector: 'app-authentication-login',
  templateUrl: './authentication-login.component.html',
})
export class AuthenticationLoginComponent implements OnInit {
  public authForm: FormGroup;
  constructor(public firebaseAuth: AngularFireAuth) {
    this.authForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  public googleLogin(): void {
    this.firebaseAuth
        .signInWithPopup(new firebase.auth.GoogleAuthProvider())
        .then((data: firebase.auth.UserCredential) => {
          console.log('Authentication -- google login', data);
        })
        .catch((error: any) => {
          console.error('Authentication -- google authentication', error);
        });
  }

  public credentialsLogin(username: string, password: string): void {
    this.firebaseAuth
        .signInWithEmailAndPassword(username, password)
        .then((data: firebase.auth.UserCredential) => {
          console.log('Authentication -- credentials login', data);
        })
        .catch((error: any) => {
          console.error('Authentication -- credentials authentication', error);
        });
  }

  public githubLogin(): void {
    this.firebaseAuth.signInWithRedirect(
        new firebase.auth.GithubAuthProvider(),
    );
  }

  public validateCredentials(): void {
    if (this.authForm.valid === true) {
      const credentials:{username: string, password: string} = this.authForm.getRawValue();
      this.credentialsLogin(credentials.username, credentials.password);
    }
  }

  ngOnInit(): void {
    console.log('Authentication login -- init life state');
  }
}
