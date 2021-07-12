import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { UserI } from 'src/app/interfaces/inputs/UserI';
import firebase from 'firebase/app';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(public afs: AngularFirestore) {}

  /**
   * Verifies if an user id exist if it isn't, it register the id
   * @param {string} userId to register
   */
  public createUser(user: firebase.User) {
    this.queryUser(user.uid)
        .pipe(take(1))
        .subscribe({
          next: (users) => {
            console.log('Users --- users list', users);
            if (users.length === 0) {
              const newUser:UserI = {
                displayName: user.displayName,
                email: user.email,
                photoURL: user.photoURL,
                id: user.uid,
              };
              this.afs.collection('users').add(newUser);
              console.log('User created at /users', newUser);
            }
          },
          error: (err) => {
            console.error(err);
          },
        });
  }

  /**
   * Retrieve a users list by id
   * @param {string} userId searched
   * @returns {Observable} list of users
   */
  public queryUser(userId: string): Observable<UserI[]> {
    return this.afs
        .collection<UserI>('users', (ref) => ref.where('id', '==', userId))
        .valueChanges();
  }
}
