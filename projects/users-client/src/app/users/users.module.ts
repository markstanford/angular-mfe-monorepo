import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { UsersRoutingModule } from './users-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersDashboardWidgetComponent } from './users-dashboard-widget/users-dashboard-widget.component';
import { UsersEffects, usersFeatureKey, usersReducer, UsersService } from 'shared';

@NgModule({
  declarations: [
    UsersListComponent,
    UsersDashboardWidgetComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    StoreModule.forFeature(usersFeatureKey, usersReducer),
    EffectsModule.forFeature([UsersEffects])
  ],
  providers: [UsersService]
})
export class UsersModule { }
