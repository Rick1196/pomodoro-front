import { Injectable } from '@angular/core';
import { TodoI } from 'src/app/interfaces/TodoI';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root',
})
export class TodosService {
  private todosDB: AngularFireList<TodoI>;

  constructor(private db: AngularFireDatabase) {
    this.todosDB = this.db.list('/todos', (ref) =>
      ref.orderByChild('dateCreated'),
    );
  }
}
