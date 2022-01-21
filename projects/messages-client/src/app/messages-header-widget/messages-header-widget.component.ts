import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { Message, selectAllMessages } from 'shared';

@Component({
  selector: 'app-messages-header-widget',
  templateUrl: './messages-header-widget.component.html',
  styleUrls: ['./messages-header-widget.component.scss']
})
export class MessagesHeaderWidgetComponent implements OnInit, OnDestroy {

  messagesTotal = '';
  private destroy$ = new Subject<void>();

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.select(selectAllMessages)
      .pipe(takeUntil(this.destroy$))
      .subscribe((messages: Message[]) => {
        if (messages.length > 0) {
          this.messagesTotal = '' + messages.length;
        } else {
          this.messagesTotal = '';
        }
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }
}
