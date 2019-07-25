import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as fromArticles from './article.actions';
import { switchMap, catchError, map } from 'rxjs/operators';
import { ArticleService } from './article.service';
import { of } from 'rxjs';

@Injectable()
export class ArticleEffects {


  constructor(
    private actions$: Actions,
    private articlesService: ArticleService,
  ) { }

  // @Effect()
  // getArticles$ = this.actions$.pipe(
  //   ofType(fromArticles.ArticleActionTypes.LoadArticles),
  //   switchMap((action: any) => {
  //     return this.articlesService.getArticles().pipe(
  //       map(articles => {

  //         return new fromArticles.LoadArticlesSuccessfulAction(articles);

  //       }),
  //       catchError(error => <any>of(new fromArticles.FailArticlesAction(error)))
  //     );
  //   }),
  // );

}
