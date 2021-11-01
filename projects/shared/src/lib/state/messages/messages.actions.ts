import { createAction, props } from '@ngrx/store';

import { Message } from './message';

const loadMessages = createAction('[Messages API] Load Messages');
const loadMessagesSuccess = createAction('[Messages API] Load Messages Success', props<{ messages: Message[] }>());
const loadMessagesFailure = createAction('[Messages API] Load Messages Failure', props<{ error: any }>());

const addMessage = createAction('[Messages API] Add Message', props<{ message: Message }>());

export const MessagesActions = {
  loadMessages,
  loadMessagesSuccess,
  loadMessagesFailure,
  addMessage
};
