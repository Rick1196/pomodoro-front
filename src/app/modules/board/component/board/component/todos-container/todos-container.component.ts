import { CdkDropList } from '@angular/cdk/drag-drop';
import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { SectionI } from 'src/app/interfaces/section';

@Component({
  selector: 'app-todos-container',
  templateUrl: './todos-container.component.html',
})
export class TodosContainerComponent {
  @Input() section:SectionI;
  @Input() teamId: string;
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

  public dropped(event: any): void {
    console.log(event);
  }
}
