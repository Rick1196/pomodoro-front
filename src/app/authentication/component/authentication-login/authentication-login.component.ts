import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import firebase from 'firebase/app';
import { BasicInputFieldI } from 'src/app/interfaces/inputs/BasicInputFieldI';
@Component({
  selector: 'app-authentication-login',
  templateUrl: './authentication-login.component.html',
})
export class AuthenticationLoginComponent implements OnInit {
  public authForm: FormGroup;
  public formWithErrors = false;
  public inputFields: {
    username: BasicInputFieldI;
    password: BasicInputFieldI;
  } = { username: null, password: null };
  constructor(public firebaseAuth: AngularFireAuth, private router: Router) {
    this.authForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
    this.setInputFieldsProps();
  }

  private setInputFieldsProps(): void {
    this.inputFields.username = {
      autocomplete: 'on',
      class: 'input',
      formControl: this.authForm.get('username') as FormControl,
      id: 'email',
      name: 'email',
      placeholder: 'email',
      type: 'text',
    };

    this.inputFields.password = {
      autocomplete: 'on',
      class: 'input',
      formControl: this.authForm.get('password') as FormControl,
      id: 'password',
      name: 'password',
      placeholder: 'password',
      type: 'password',
    };
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
      const credentials: { username: string; password: string } =
        this.authForm.getRawValue();
      this.credentialsLogin(credentials.username, credentials.password);
    } else {
      this.formWithErrors = true;
    }
  }

  public gotoSignUp(): void {
    this.router.navigateByUrl('/signUp');
  }

  ngOnInit(): void {
    console.log('Authentication login -- init life state');
  }
}
