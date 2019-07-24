import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { PropertyActionTypes } from './property.actions';

@Injectable()
export class PropertyEffects {

  @Effect()
  loadPropertys$ = this.actions$.pipe(ofType(PropertyActionTypes.LoadProperties));

  constructor(private actions$: Actions) {}
}
