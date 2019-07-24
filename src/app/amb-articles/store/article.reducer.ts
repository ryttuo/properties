import { Action } from '@ngrx/store';
import { ArticleActions, ArticleActionTypes } from './article.actions';

export interface ArticleState {
  articles: Array<any>
}

export const initialState: ArticleState = {
  articles: [],
};

export function articleReducer(state = initialState, action: ArticleActions): ArticleState {
  switch (action.type) {

    case ArticleActionTypes.LoadArticles:
      return state;


    default:
      return state;
  }
}
