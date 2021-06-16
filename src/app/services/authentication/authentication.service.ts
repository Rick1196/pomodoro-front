import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationService {
  public userCredentials: firebase.auth.UserCredential | null = null;
  constructor(public firebaseAuth: AngularFireAuth) {}
  public async googleLogin(): Promise<firebase.auth.UserCredential> {
    await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
    return this.firebaseAuth.signInWithPopup(
        new firebase.auth.GoogleAuthProvider(),
    );
  }

  public async credentialsLogin(
      username: string,
      password: string,
  ): Promise<firebase.auth.UserCredential> {
    await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL);
    return this.firebaseAuth.signInWithEmailAndPassword(username, password);
  }

  public getAuthenticationStatus(): Observable<firebase.User> {
    return this.firebaseAuth.authState;
  }

  public isAuthenticated(): Observable<firebase.User> {
    return this.firebaseAuth.authState;
  }

  public signOut(): Promise<void> {
    return this.firebaseAuth.signOut();
  }

  public async isGuest(): Promise<boolean> {
    return new Promise((resolve) => {
      this.firebaseAuth.authState.toPromise().then((user: firebase.User) => {
        if (user || user !== null || user !== undefined) {
          resolve(false);
        } else {
          resolve(true);
        }
      });
    });
  }
}
