import { NgModule } from '@angular/core';
import { SharedComponent } from './shared.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MessagesEffects, messagesFeatureKey, messagesReducer } from './state';

@NgModule({
  declarations: [
    SharedComponent
  ],
  imports: [
    StoreModule.forFeature(messagesFeatureKey, messagesReducer),
    EffectsModule.forFeature([MessagesEffects]),
  ],
  providers: [],
  exports: [
    SharedComponent
  ]
})
export class SharedModule { }
