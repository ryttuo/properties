import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { PropertyEffects } from './property.effects';

describe('PropertyEffects', () => {
  let actions$: Observable<any>;
  let effects: PropertyEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        PropertyEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(PropertyEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
