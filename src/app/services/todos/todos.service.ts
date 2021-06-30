import { Injectable } from '@angular/core';
import { TodoI } from 'src/app/interfaces/TodoI';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TodosService {

  constructor(public afs: AngularFirestore) {}
  public createTeam(todo: TodoI) {
    this.afs.collection('todos').add(todo);
  }
  public readUserTeams(sectionId: string): Observable<TodoI[]> {
    return this.afs
        .collection<TodoI>('todos', (ref) => {
          return ref.where('sectionId', '==', sectionId );
        })
        .snapshotChanges().pipe(
          map(changes =>
            changes.map(c =>
              ({ uid: c.payload.doc.id, ...c.payload.doc.data() })
            )
          )
        );
  }
}
