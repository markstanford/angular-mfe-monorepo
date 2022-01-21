import { loadRemoteModule } from '@angular-architects/module-federation-runtime';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule)
  },
  {
    path: 'users',
    loadChildren: () => loadRemoteModule({
      remoteName: 'usersClient',
      exposedModule: './UsersModule'
    }).then((m) => m.UsersModule)
  },
  {
    path: 'messages',
    loadChildren: () => loadRemoteModule({
      remoteName: 'messagesClient',
      exposedModule: './MessagesModule'
    }).then((m) => m.MessagesModule)
  },
  {
    path: '**',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
