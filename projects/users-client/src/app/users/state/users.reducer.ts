import { createReducer, on } from '@ngrx/store';
import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';

import { User } from './user';
import { UsersActions } from './users.actions';

export const usersFeatureKey = 'users';

export const usersEntityAdapter: EntityAdapter<User> = createEntityAdapter<User>();

export interface UsersState extends EntityState<User> { }

export const initialUsersState: UsersState = usersEntityAdapter.getInitialState();

export const usersReducer = createReducer(
  initialUsersState,
  on(UsersActions.loadUsers, (state): UsersState => ({ ...state })),
  on(UsersActions.loadUsersSuccess, (state: UsersState, { users }): UsersState =>
    usersEntityAdapter.setAll(users, { ...state })),
  on(UsersActions.loadUsersFailure, (state, action) =>
    ({ ...state }))
);
