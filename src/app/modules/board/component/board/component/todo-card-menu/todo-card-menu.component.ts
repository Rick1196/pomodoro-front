import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-todo-card-menu',
  templateUrl: './todo-card-menu.component.html',
})
export class TodoCardMenuComponent implements OnInit {
  @Input() options:{translation:string, code:string}[] = [];
  @Output() actionCode:EventEmitter<string> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  public performAction(code:string){
    this.actionCode.emit(code);
  }

}

