import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';

import { MessagesRoutingModule } from './messages-routing.module';
import { MessagesListComponent } from './messages-list/messages-list.component';
import { SharedModule } from 'shared';

@NgModule({
  declarations: [
    MessagesListComponent
  ],
  imports: [
    CommonModule,
    MessagesRoutingModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule,
    SharedModule
  ],
  providers: []
})
export class MessagesModule { }
