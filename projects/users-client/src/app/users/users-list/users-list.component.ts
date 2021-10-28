import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { UsersActions, User, selectAllUsers } from 'shared';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit, OnDestroy {

  displayedColumns: string[] = ['id', 'name', 'email', 'active'];
  dataSource: User[] = [];
  private destroy$ = new Subject<void>();

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.store.dispatch(UsersActions.loadUsers());
    this.store.select(selectAllUsers)
      .pipe(takeUntil(this.destroy$))
      .subscribe((users: User[]) => this.dataSource = users);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }
}
