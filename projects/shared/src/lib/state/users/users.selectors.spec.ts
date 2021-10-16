
import { User } from './user';
import { usersFeatureKey } from './users.reducer';
import { selectUsersState } from './users.selectors';

describe('Tickets Selectors', () => {
  it('should select the users state', () => {
    const result = selectUsersState({ [usersFeatureKey]: {} });
    expect(result).toBeNull();
  });
});
