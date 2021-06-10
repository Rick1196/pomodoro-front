import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuestGuard } from './helper/guard/guest/gest/guest.guard';
import { UserGuard } from './helper/guard/user/user-auth-guard/user.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./authentication/authentication.module').then(
          (m) => m.AuthenticationModule,
      ),
    canLoad: [GuestGuard],
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
