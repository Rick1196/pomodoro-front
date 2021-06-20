import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared-module/shared.module';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { BoardRoutingModule } from './board-routing.module';
import { TodoCardComponent } from './component/borard/component/todo-card/todo-card.component';
import { CardContainerComponent } from './component/borard/component/cards-container/card-container.component';
import { TodosContainerComponent } from './component/borard/component/todos-container/todos-container.component';

@NgModule({
  declarations: [DashboardComponent, TodoCardComponent, CardContainerComponent, TodosContainerComponent],
  imports: [CommonModule, SharedModule, BoardRoutingModule],
})
export class BoardModule {}
