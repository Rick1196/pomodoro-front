import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TeamsDashboardComponent } from './component/teams-dashboard/teams-dashboard.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: TeamsDashboardComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TeamsRoutingModule { }
