import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGuard } from './helper/guard/user/user-auth-guard/user.guard';
import { UserSectionComponent } from './modules/user/user-section/user-section.component';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./modules/authentication/authentication.module').then(
          (m) => m.AuthenticationModule,
      ),
  },
  {
    path: 'pomodoro',
    loadChildren: () =>
      import('./pomodoro/pomodoro.module').then((m) => m.PomodoroModule),
    canLoad: [UserGuard],
  },
  {
    path: 'board',
    component: UserSectionComponent,
    loadChildren: () =>
      import('./modules/user/user.module').then((m) => m.UserModule),
    canLoad: [UserGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
