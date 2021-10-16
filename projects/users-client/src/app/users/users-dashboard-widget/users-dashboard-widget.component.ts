import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { UsersActions, User, selectAllUsers } from 'shared';

@Component({
  selector: 'app-users-dashboard-widget',
  templateUrl: './users-dashboard-widget.component.html',
  styleUrls: ['./users-dashboard-widget.component.scss']
})
export class UsersDashboardWidgetComponent implements OnInit {

  users$: Observable<User[]> | undefined;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(UsersActions.loadUsers());
    this.users$ = this.store.select(selectAllUsers);
  }

}
