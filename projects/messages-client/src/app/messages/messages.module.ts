import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatBadgeModule } from '@angular/material/badge';

import { MessagesRoutingModule } from './messages-routing.module';
import { MessagesListComponent } from './messages-list/messages-list.component';
import { MessagesDashboardWidgetComponent } from './messages-dashboard-widget/messages-dashboard-widget.component';
import { MessagesEffects, messagesFeatureKey, messagesReducer, MessagesService } from 'shared';
import { MessagesHeaderWidgetComponent } from './messages-header-widget/messages-header-widget.component';

@NgModule({
  declarations: [
    MessagesListComponent,
    MessagesDashboardWidgetComponent,
    MessagesHeaderWidgetComponent
  ],
  imports: [
    CommonModule,
    MessagesRoutingModule,
    StoreModule.forFeature(messagesFeatureKey, messagesReducer),
    EffectsModule.forFeature([MessagesEffects]),
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatBadgeModule
  ],
  providers: [MessagesService]
})
export class MessagesModule { }
