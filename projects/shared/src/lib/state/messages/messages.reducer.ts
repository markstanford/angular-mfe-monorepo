import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { Message } from './message';
import { MessagesActions } from './messages.actions';

export const messagesFeatureKey = 'messages';

export const messagesEntityAdapter: EntityAdapter<Message> = createEntityAdapter<Message>();

export interface MessagesState extends EntityState<Message> { }

export const initialMessagesState: MessagesState = messagesEntityAdapter.getInitialState();

export const messagesReducer = createReducer(
  initialMessagesState,
  on(MessagesActions.loadMessages, (state): MessagesState => ({ ...state })),
  on(MessagesActions.loadMessagesSuccess, (state: MessagesState, { messages }): MessagesState =>
    messagesEntityAdapter.setAll(messages, { ...state })),
  on(MessagesActions.loadMessagesFailure, (state, action) =>
    ({ ...state }))
);
