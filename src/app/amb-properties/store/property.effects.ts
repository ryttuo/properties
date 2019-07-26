import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromProperties from './property.actions';
import { PropertyService } from './property.service';
import { switchMap, catchError, map } from 'rxjs/operators';
import { of } from 'rxjs';

@Injectable()
export class PropertyEffects {

  constructor(
    private actions$: Actions,
    private propertyService: PropertyService,
  ) { }

  @Effect()
  getArticles$ = this.actions$.pipe(
    ofType(fromProperties.PropertyActionTypes.LoadProperties),
    switchMap((action: any) => {
      return this.propertyService.getProperties().pipe(
        map(articles => {

          return new fromProperties.LoadPropertiesSuccessfulAction(articles);

        }),
        catchError(error => <any>of(new fromProperties.FailPropertiesAction(error)))
      );
    }),
  );

}
