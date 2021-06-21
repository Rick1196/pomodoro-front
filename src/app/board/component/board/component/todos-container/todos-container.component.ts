import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-todos-container',
  templateUrl: './todos-container.component.html',
})
export class TodosContainerComponent implements OnInit {
  public todoTitleForm = new FormControl(null, [
    Validators.required,
    Validators.minLength(1),
    Validators.pattern('(.+[a-zA-Z])(\n+)'),
  ]);
  constructor() {}

  public saveNewTodoTitle(): void {
    if (this.todoTitleForm.invalid === false) {
      console.log('Todo container --- new todo', this.todoTitleForm.value);
      this.todoTitleForm.reset();
    } else {
      this.todoTitleForm.setValue(null);
      this.todoTitleForm.reset();
    }
  }

  ngOnInit(): void {}
}
