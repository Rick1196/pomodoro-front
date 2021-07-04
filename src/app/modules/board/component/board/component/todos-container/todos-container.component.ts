import { Input, OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { SectionI } from 'src/app/interfaces/section';
import { TodoI } from 'src/app/interfaces/TodoI';
import { SectionsService } from 'src/app/services/sections/sections.service';
import { TodosService } from 'src/app/services/todos/todos.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-todos-container',
  templateUrl: './todos-container.component.html',
})
export class TodosContainerComponent implements OnInit {
  @Input() section:SectionI;
  @Input() teamId: string;
  @Input() id:string = '';
  public menuOptions:{translation:string,code:string}[] = environment.commonData.sectionMenuOptions;
  public todoTitleForm = new FormControl(null, [
    Validators.required,
    Validators.minLength(1),
    Validators.pattern('(.+[a-zA-Z])(\n+)'),
  ]);
  public menuStatus: boolean = false;
  constructor(public todosService: TodosService, public sectionsService: SectionsService) {}

  ngOnInit():void {
  }

  public changeMenuStatus():void {
    this.menuStatus = !this.menuStatus;
  }

  public performSectionAction(code:string):void{
    this.sectionsService.deleteSection(this.section).then(() => console.log('Deleted section', this.section))
    .catch((error)=>console.error(error));
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
