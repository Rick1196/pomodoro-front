import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { TodoI } from 'src/app/interfaces/TodoI';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
})
export class TodoCardComponent {
  @Input() todo:TodoI;
  constructor() {}
}
