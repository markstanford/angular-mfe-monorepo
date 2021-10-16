import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { DashboardWidgetProxyComponent } from './dashboard-widget-proxy/dashboard-widget-proxy.component';
import { MessagesEffects, messagesFeatureKey, messagesReducer, MessagesService, UsersEffects, usersFeatureKey, usersReducer, UsersService } from 'shared';

@NgModule({
  declarations: [
    DashboardComponent,
    DashboardWidgetProxyComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    // dynamically loaded components doesn't include a module, so any component dependencies need to be added here
    StoreModule.forFeature(usersFeatureKey, usersReducer),
    EffectsModule.forFeature([UsersEffects]),
    StoreModule.forFeature(messagesFeatureKey, messagesReducer),
    EffectsModule.forFeature([MessagesEffects])
  ],
  providers: [UsersService, MessagesService]
})
export class DashboardModule { }
