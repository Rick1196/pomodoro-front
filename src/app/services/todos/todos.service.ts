import { Injectable } from '@angular/core';
import { TodoI } from 'src/app/interfaces/TodoI';
import { AngularFirestore, DocumentReference } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SectionI } from 'src/app/interfaces/section';

@Injectable({
  providedIn: 'root',
})
export class TodosService {

  constructor(public afs: AngularFirestore) {}

  public createTodo(todo: TodoI):Promise<DocumentReference<TodoI>> {
    return this.afs.collection<TodoI>('todos').add(todo);
  }

  public readSectionTodos(sectionId: string): Observable<TodoI[]> {
    return this.afs
        .collection<TodoI>('todos', (ref) => {
          return ref.where('sectionId', '==', sectionId ).orderBy('dateUpdated','desc');
        })
        .snapshotChanges().pipe(
          map(changes =>
            changes.map(c =>
              ({ uid: c.payload.doc.id, ...c.payload.doc.data() })
            )
          )
        );
  }

  public deleteTodo(todo:TodoI):Promise<void> {
    return this.afs.collection('todos').doc(todo.uid).delete();
  } 


  public updateTodo(todo:TodoI):Promise<void>{
    console.log('To update', todo);
    return this.afs.collection('todos').doc(todo.uid).update(todo);
  }
}
