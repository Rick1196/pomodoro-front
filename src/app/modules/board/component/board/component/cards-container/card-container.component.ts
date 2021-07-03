import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/internal/operators/takeUntil';
import { TodoI } from 'src/app/interfaces/TodoI';
import { TodosService } from 'src/app/services/todos/todos.service';

@Component({
  selector: 'app-card-container',
  templateUrl: './card-container.component.html',
})
export class CardContainerComponent implements OnInit, OnDestroy{
  @Input() sectionId: string;
  public componentDestroyed: Subject<void> = new Subject();
  constructor(public todosService:TodosService) {}
  public todos:Observable<TodoI[]>;

  ngOnInit():void {
    this.todos = this.todosService.readSectionTodos(this.sectionId)
    this.todos.pipe(takeUntil(this.componentDestroyed)).subscribe({
      next: (data: any) =>{
        console.log('Todos section', this.sectionId, data);
      },
      error: (err)=> console.error('Create todo --', err)
    })
  }

  ngOnDestroy(): void {
    this.componentDestroyed.next();
  }
}
