import { NgModule } from '@angular/core';
import { SharedComponent } from './shared.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MessagesEffects, messagesFeatureKey, messagesReducer, UsersEffects, usersFeatureKey, usersReducer } from './state';

@NgModule({
  declarations: [
    SharedComponent
  ],
  imports: [
    StoreModule.forFeature(usersFeatureKey, usersReducer),
    EffectsModule.forFeature([UsersEffects]),
    StoreModule.forFeature(messagesFeatureKey, messagesReducer),
    EffectsModule.forFeature([MessagesEffects]),
  ],
  providers: [],
  exports: [
    SharedComponent
  ]
})
export class SharedModule { }
