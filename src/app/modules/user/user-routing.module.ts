import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserGuard } from 'src/app/helper/guard/user/user-auth-guard/user.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('../board/board.module').then((m) => m.BoardModule),
    canLoad: [UserGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule { }
