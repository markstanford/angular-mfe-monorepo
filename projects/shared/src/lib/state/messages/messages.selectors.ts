import { createFeatureSelector, createSelector } from '@ngrx/store';
import { messagesEntityAdapter, messagesFeatureKey, MessagesState } from './messages.reducer';

const messagesEntitySelectors = messagesEntityAdapter.getSelectors();

export const selectMessagesState = createFeatureSelector<MessagesState>(messagesFeatureKey);

export const selectAllMessages = createSelector(
  selectMessagesState,
  messagesEntitySelectors.selectAll
)

