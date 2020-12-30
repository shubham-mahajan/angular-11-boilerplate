import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuard } from 'src/app/shared/guards/auth.guard'

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule),
  },

  {
    path: 'dashboard',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule),
    canLoad: [AuthGuard]
  },

  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
