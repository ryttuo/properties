import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ArticleActionTypes } from './article.actions';

@Injectable()
export class ArticleEffects {

  @Effect()
  loadArticles$ = this.actions$.pipe(ofType(ArticleActionTypes.LoadArticles));

  constructor(private actions$: Actions) {}
}
