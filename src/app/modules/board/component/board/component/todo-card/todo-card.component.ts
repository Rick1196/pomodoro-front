import { Input } from '@angular/core';
import { Component } from '@angular/core';
import { TodoI } from 'src/app/interfaces/TodoI';
import { TodosService } from 'src/app/services/todos/todos.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
})
export class TodoCardComponent {
  @Input() todo:TodoI;
  @Input() id:string = '';
  public menuOptions:{translation:string,code:string}[] = environment.commonData.cardMenuOptions;
  public menuStatus:boolean = false;
  constructor(public todosService: TodosService) {}
  
  performCardAction(code:string):void{
    switch(code){
      case 'delete':
        break;
    }
  }

  deleteCard():void{
    this.todosService.deleteTodo(this.todo).then(() => console.log('Todo card, deleted', this.todo))
    .catch((error)=> console.error(error))
  }

  changeMenuStatus():void{
    this.menuStatus = !this.menuStatus;
  }
}
