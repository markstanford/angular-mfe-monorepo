import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MessagesListComponent } from './messages-list/messages-list.component';

const routes: Routes = [
  {
    path: '',
    component: MessagesListComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MessagesRoutingModule { }
