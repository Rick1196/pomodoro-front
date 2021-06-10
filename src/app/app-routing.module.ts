import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGuard } from './helper/guard/user/user-auth-guard/user.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./authentication/authentication.module').then(
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
    loadChildren: () =>
      import('./board/board.module').then((m) => m.BoardModule),
    canLoad: [UserGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
