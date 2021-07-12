import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateTeamSectionComponent } from './component/create-team-section/create-team-section.component';
import { TeamsDashboardComponent } from './component/teams-dashboard/teams-dashboard.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'dashboard/:id',
        component: TeamsDashboardComponent,
      },
      {
        path: 'create-team',
        component: CreateTeamSectionComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamsRoutingModule { }
