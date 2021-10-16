import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Message, MessagesActions, selectAllMessages } from 'shared';

@Component({
  selector: 'app-messages-dashboard-widget',
  templateUrl: './messages-dashboard-widget.component.html',
  styleUrls: ['./messages-dashboard-widget.component.scss']
})
export class MessagesDashboardWidgetComponent implements OnInit {

  messages$: Observable<Message[]> | undefined;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(MessagesActions.loadMessages());
    this.messages$ = this.store.select(selectAllMessages);
  }

}
