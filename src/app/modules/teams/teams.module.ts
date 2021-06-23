import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamsRoutingModule } from './teams-routing.module';
import { TeamsDashboardComponent } from './component/teams-dashboard/teams-dashboard.component';
import { CreateTeamComponent } from './component/create-team/create-team.component';


@NgModule({
  declarations: [
    TeamsDashboardComponent,
    CreateTeamComponent,
  ],
  imports: [
    CommonModule,
    TeamsRoutingModule,
  ],
})
export class TeamsModule { }
