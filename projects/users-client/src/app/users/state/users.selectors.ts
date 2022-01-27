import { createFeatureSelector, createSelector } from '@ngrx/store';
import { usersEntityAdapter, usersFeatureKey, UsersState } from './users.reducer';

const usersEntitySelectors = usersEntityAdapter.getSelectors();

export const selectUsersState = createFeatureSelector<UsersState>(usersFeatureKey);

export const selectAllUsers = createSelector(
  selectUsersState,
  usersEntitySelectors.selectAll
)

