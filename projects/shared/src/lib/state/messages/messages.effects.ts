import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, concatMap, map } from 'rxjs/operators';
import { of } from 'rxjs'

import { MessagesService } from "../../services/messages.service";
import { Message } from "./message";
import { MessagesActions } from "./messages.actions";


@Injectable()
export class MessagesEffects {

  loadMessages$ = createEffect(() =>
    this.actions$.pipe(
      ofType(MessagesActions.loadMessages),
      concatMap(() =>
        this.messagesService.getMessages().pipe(
          map((messages: Message[]) => MessagesActions.loadMessagesSuccess({ messages })),
          catchError(error => of(MessagesActions.loadMessagesFailure({ error })))
        )
      )
    ));

  constructor(
    private actions$: Actions,
    private messagesService: MessagesService,
  ) { }
}
