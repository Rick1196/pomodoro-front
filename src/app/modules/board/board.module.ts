import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared-module/shared.module';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { BoardRoutingModule } from './board-routing.module';
import { TodoCardComponent } from './component/board/component/todo-card/todo-card.component';
import { CardContainerComponent } from './component/board/component/cards-container/card-container.component';
import { TodosContainerComponent } from './component/board/component/todos-container/todos-container.component';
import { CreateSectionComponent } from './component/create-section/create-section.component';
import { TodoCardMenuComponent } from './component/board/component/todo-card-menu/todo-card-menu.component';

@NgModule({
  declarations: [DashboardComponent, TodoCardComponent, CardContainerComponent, TodosContainerComponent, CreateSectionComponent, TodoCardMenuComponent],
  imports: [CommonModule, SharedModule, BoardRoutingModule],
})
export class BoardModule {}
