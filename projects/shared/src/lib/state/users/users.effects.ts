import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, concatMap, map } from 'rxjs/operators';
import { of } from 'rxjs'

import { UsersService } from "../../services/users.service";
import { User } from "./user";
import { UsersActions } from "./users.actions";


@Injectable()
export class UsersEffects {

  loadUsers$ = createEffect(() =>
    this.actions$.pipe(
      ofType(UsersActions.loadUsers),
      concatMap(() =>
        this.usersService.getUsers().pipe(
          map((users: User[]) => UsersActions.loadUsersSuccess({ users })),
          catchError(error => of(UsersActions.loadUsersFailure({ error })))
        )
      )
    ));

  constructor(
    private actions$: Actions,
    private usersService: UsersService,
  ) { }
}
