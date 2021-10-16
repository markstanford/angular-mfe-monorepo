import { UsersActions } from "./users.actions";
import { initialUsersState, usersReducer } from "./users.reducer";

describe('Users Reducer', () => {

  describe('Action: [Users API] Load Users', () => {
    it('should set loading to true', () => {

      const action = UsersActions.loadUsers();
      const state = usersReducer(undefined, action);

      expect(state).toEqual({ ...initialUsersState });
    });
  });

});
