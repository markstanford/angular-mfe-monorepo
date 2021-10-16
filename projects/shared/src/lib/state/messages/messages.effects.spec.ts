import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs';
import { MessagesEffects } from './messages.effects';

describe('MessagesEffects', () => {


  let actions$: Observable<Action>;
  let effects: MessagesEffects;

  beforeEach(() => {

    TestBed.configureTestingModule({
      providers: [
        MessagesEffects,
        provideMockActions(() => actions$),
      ],
    });

    effects = TestBed.inject(MessagesEffects);
  });

  it(`should be created`, () => {
    expect(effects).toBeTruthy();
  });

});
