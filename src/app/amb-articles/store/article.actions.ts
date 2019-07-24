import { Action } from '@ngrx/store';

export enum ArticleActionTypes {
  LoadArticles = '[Article] Load Articles',
  LoadArticlesSuccessful = '[Article] Load Articles Successful',
  FailArticles = '[Article] Fail Articles',
}

export class LoadArticlesAction implements Action {
  readonly type = ArticleActionTypes.LoadArticles;
}

export class LoadArticlesSuccessfulAction implements Action {
  readonly type = ArticleActionTypes.LoadArticlesSuccessful;
}

export class FailArticlesAction implements Action {
  readonly type = ArticleActionTypes.FailArticles;
}

export type ArticleActions = LoadArticlesAction |
LoadArticlesSuccessfulAction |
FailArticlesAction;
