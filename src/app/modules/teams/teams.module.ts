import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TeamsRoutingModule } from './teams-routing.module';
import { TeamsDashboardComponent } from './component/teams-dashboard/teams-dashboard.component';
import { CreateTeamComponent } from './component/create-team/create-team.component';
import { SharedModule } from 'src/app/shared-module/shared.module';
import { TeamsListComponent } from './component/teams-list/teams-list.component';
import { CreateTeamSectionComponent } from './component/create-team-section/create-team-section.component';


@NgModule({
  declarations: [
  
    CreateTeamSectionComponent
  ],
  imports: [
    CommonModule,
    TeamsRoutingModule,
    SharedModule,
  ],
})
export class TeamsModule { }
