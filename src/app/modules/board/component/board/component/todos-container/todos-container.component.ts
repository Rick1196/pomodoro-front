import { Input, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { SectionI } from 'src/app/interfaces/section';
import { TodoI } from 'src/app/interfaces/TodoI';
import { TodosService } from 'src/app/services/todos/todos.service';

@Component({
  selector: 'app-todos-container',
  templateUrl: './todos-container.component.html',
})
export class TodosContainerComponent implements OnInit {
  @Input() section:SectionI;
  @Input() teamId: string;
  public todoTitleForm = new FormControl(null, [
    Validators.required,
    Validators.minLength(1),
    Validators.pattern('(.+[a-zA-Z])(\n+)'),
  ]);
  constructor(public todosService: TodosService) {}

  ngOnInit():void {
  }

  public saveNewTodoTitle(): void {
    if (this.todoTitleForm.invalid === false) {
      console.log('Todo container --- new todo', this.todoTitleForm.value, this.section, this.teamId);
      const todoData:TodoI = {
        dateCreated: new Date(),
        dateUpdated: new Date(),
        title: this.todoTitleForm.value,
        comment: null, 
        description: null,
        sectionId: this.section.uid
      };
      this.todosService.createTodo(todoData);
      this.todoTitleForm.reset();
    } else {
      this.todoTitleForm.setValue(null);
      this.todoTitleForm.reset();
    }
  }

}
