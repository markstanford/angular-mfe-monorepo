import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Message, MessagesActions, selectAllMessages } from 'shared';

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.scss']
})
export class MessagesListComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['id', 'message'];
  dataSource: Message[] = [];
  private destroy$ = new Subject<void>();

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(MessagesActions.loadMessages());
    this.store.select(selectAllMessages)
      .pipe(takeUntil(this.destroy$))
      .subscribe((messages: Message[]) => this.dataSource = messages);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

  addMessage(): void {
    const id = '' + (this.dataSource.length + 1);
    const message: Message = {
      id,
      message: `New Message ${id}`
    }
    this.store.dispatch(MessagesActions.addMessage({ message }))
  }

}
