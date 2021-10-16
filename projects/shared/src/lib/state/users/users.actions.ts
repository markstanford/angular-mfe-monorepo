import { createAction, props } from '@ngrx/store';
import { User } from './user';

const loadUsers = createAction('[Users API] Load Users');
const loadUsersSuccess = createAction('[Users API] Load Users Success', props<{ users: User[] }>());
const loadUsersFailure = createAction('[Users API] Load Users Failure', props<{ error: any }>());

export const UsersActions = {
  loadUsers,
  loadUsersSuccess,
  loadUsersFailure,
};
