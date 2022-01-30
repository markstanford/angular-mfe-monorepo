import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RemoteErrorComponent } from './remote-error.component';

const routes: Routes = [
  {
    path: '',
    component: RemoteErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RemoteErrorRoutingModule { }
