import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared-module/shared.module';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { BoardRoutingModule } from './board-routing.module';

@NgModule({
  declarations: [DashboardComponent],
  imports: [CommonModule, SharedModule, BoardRoutingModule],
})
export class BoardModule {}
