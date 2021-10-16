import { createAction, props } from '@ngrx/store';

import { Message } from './message';

const loadMessages = createAction('[Messages API] Load Messages');
const loadMessagesSuccess = createAction('[Messages API] Load Messages Success', props<{ messages: Message[] }>());
const loadMessagesFailure = createAction('[Messages API] Load Messages Failure', props<{ error: any }>());

export const MessagesActions = {
  loadMessages,
  loadMessagesSuccess,
  loadMessagesFailure,
};
