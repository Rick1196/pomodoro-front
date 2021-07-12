import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import firebase from 'firebase/app';
import { ValidatePassword } from 'src/app/helper/validations/password-match';
import { AuthError } from 'src/app/interfaces/AuthError';
import { BasicInputFieldI } from 'src/app/interfaces/inputs/BasicInputFieldI';
import { LanguageService } from 'src/app/services/language/language.service';

@Component({
  selector: 'app-authentication-signup',
  templateUrl: './authentication-signup.component.html',
})
export class AuthenticationSignupComponent implements OnInit {
  public authForm: FormGroup;
  public signUpError: string | null;
  public formWithErrors = false;
  public inputFields: {
    username: BasicInputFieldI;
    password: BasicInputFieldI;
    confirmPassword: BasicInputFieldI;
  } = { username: null, password: null, confirmPassword: null };
  constructor(
    public firebaseAuth: AngularFireAuth,
    private router: Router,
    private formBuilder: FormBuilder,
    private language: LanguageService,
  ) {
    this.authForm = formBuilder.group(
        {
          email: new FormControl('', [Validators.required, Validators.email]),
          password: new FormControl('', [
            Validators.required,
            Validators.minLength(8),
          ]),
          confirmPassword: new FormControl('', [
            Validators.required,
            Validators.minLength(8),
          ]),
        },
        { validators: [ValidatePassword.validate] },
    );
    this.setInputFieldsProps();
  }

  ngOnInit(): void {
    console.log('Authentication signUp -- init life state');
  }

  private setInputFieldsProps(): void {
    this.inputFields.username = {
      autocomplete: 'on',
      class: 'input',
      formControl: this.authForm.get('email') as FormControl,
      id: 'email',
      name: 'email',
      placeholder: 'authenticationFields.email.placeholder',
      type: 'text',
      label: 'authenticationFields.email.placeholder',
    };

    this.inputFields.password = {
      autocomplete: 'on',
      class: 'input',
      formControl: this.authForm.get('password') as FormControl,
      id: 'password',
      name: 'password',
      placeholder: 'authenticationFields.password.placeholder',
      type: 'password',
      label: 'authenticationFields.password.placeholder',
    };

    this.inputFields.confirmPassword = {
      autocomplete: 'on',
      class: 'input',
      formControl: this.authForm.get('confirmPassword') as FormControl,
      id: 'confirmPassword',
      name: 'confirmPassword',
      placeholder: 'authenticationFields.confirmPassword.placeholder',
      type: 'password',
      label: 'authenticationFields.confirmPassword.placeholder',
    };
  }

  private signUpWithCredentials(username: string, password: string): void {
    this.firebaseAuth
        .createUserWithEmailAndPassword(username, password)
        .then((data: firebase.auth.UserCredential) => {
          console.log('Authentication -- sign up with credentials', data);
        })
        .catch((error: AuthError) => {
          this.signUpError = 'authenticationErrors.' + error.code;
          console.error('Authentication -- sign up with credentials', error.code);
        });
  }

  public validateCredentials(): void {
    if (this.authForm.valid === true) {
      const credentials: { email: string; password: string } =
        this.authForm.getRawValue();
      this.signUpWithCredentials(credentials.email, credentials.password);
      this.formWithErrors = false;
    } else {
      console.log('Authentication -- form error groups', this.authForm);
      this.formWithErrors = true;
    }
  }

  public returnToLogin(): void {
    this.router.navigateByUrl('/');
  }
}
