import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { UsersRoutingModule } from './users-routing.module';
import { UsersListComponent } from './users-list/users-list.component';
import { usersFeatureKey, usersReducer } from './state/users.reducer';
import { UsersEffects } from './state/users.effects';

@NgModule({
  declarations: [
    UsersListComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    MatTableModule,
    MatButtonModule,
    StoreModule.forFeature(usersFeatureKey, usersReducer),
    EffectsModule.forFeature([UsersEffects]),
  ],
  providers: []
})
export class UsersModule { }
