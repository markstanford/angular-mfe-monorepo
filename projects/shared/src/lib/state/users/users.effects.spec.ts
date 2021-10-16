import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { UsersEffects } from './users.effects';

describe('UsersEffects', () => {


  let actions$: Observable<Action>;
  let effects: UsersEffects;

  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [
        UsersEffects,
        provideMockActions(() => actions$),
      ],
    });

    effects = TestBed.inject(UsersEffects);
  });

  it(`should be created`, () => {
    expect(effects).toBeTruthy();
  });

});
