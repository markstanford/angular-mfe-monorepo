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
      type: 'module',
      remoteEntry: 'http://localhost:5001/remoteEntry.js',
      exposedModule: './UsersModule'
    })
      .then((m) => m.UsersModule)
      .catch(() => import('./remote-error/remote-error.module').then((m) => m.RemoteErrorModule))
  },
  {
    path: 'messages',
    loadChildren: () => loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:5002/remoteEntry.js',
      exposedModule: './MessagesModule'
    })
      .then((m) => m.MessagesModule)
      .catch(() => import('./remote-error/remote-error.module').then((m) => m.RemoteErrorModule))
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
