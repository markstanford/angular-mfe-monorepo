import { MessagesActions } from "./messages.actions";
import { initialMessagesState, messagesReducer } from "./messages.reducer";

describe('Messages Reducer', () => {

  describe('Action: [Messages API] Load Messages', () => {
    it('should set loading to true', () => {

      const action = MessagesActions.loadMessages();
      const state = messagesReducer(undefined, action);

      expect(state).toEqual({ ...initialMessagesState });
    });
  });

});
