import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { take } from 'rxjs/operators';
import { UserI } from 'src/app/interfaces/inputs/UserI';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(public afd: AngularFireDatabase) {}

  /**
   * Verifies if an user id exist if it isn't, it register the id
   * @param {string} userId to register
   */
  public createUser(userId: string) {
    this.queryUser(userId)
        .snapshotChanges()
        .pipe(take(1))
        .subscribe({
          next: (users) => {
            console.log('Users --- users list', users);
            if (users.length === 0) {
              this.afd.object('/users').set({ id: userId });
              console.log('User created at /users', userId);
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
  public queryUser(userId: string): AngularFireList<UserI> {
    return this.afd.list<{ id: string }>('/users', (ref) => {
      return ref.orderByChild('id').equalTo(userId);
    });
  }
}
