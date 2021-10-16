
import { Message } from './message';
import { messagesFeatureKey } from './messages.reducer';
import { selectMessagesState } from './messages.selectors';

describe('Tickets Selectors', () => {
  it('should select the messages state', () => {
    const result = selectMessagesState({ [messagesFeatureKey]: {} });
    expect(result).toBeNull();
  });
});
