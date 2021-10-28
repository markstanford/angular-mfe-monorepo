import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MatTableModule } from '@angular/material/table';

import { MessagesRoutingModule } from './messages-routing.module';
import { MessagesListComponent } from './messages-list/messages-list.component';
import { MessagesDashboardWidgetComponent } from './messages-dashboard-widget/messages-dashboard-widget.component';
import { MessagesEffects, messagesFeatureKey, messagesReducer, MessagesService } from 'shared';

@NgModule({
  declarations: [
    MessagesListComponent,
    MessagesDashboardWidgetComponent
  ],
  imports: [
    CommonModule,
    MessagesRoutingModule,
    StoreModule.forFeature(messagesFeatureKey, messagesReducer),
    EffectsModule.forFeature([MessagesEffects]),
    MatTableModule
  ],
  providers: [MessagesService]
})
export class MessagesModule { }
