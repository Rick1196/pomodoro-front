import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamsRoutingModule } from './teams-routing.module';
import { TeamsDashboardComponent } from './component/teams-dashboard/teams-dashboard.component';


@NgModule({
  declarations: [
    TeamsDashboardComponent,
  ],
  imports: [
    CommonModule,
    TeamsRoutingModule,
  ],
})
export class TeamsModule { }
