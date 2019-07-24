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

    case ArticleActionTypes.LoadArticlesSuccessful:
      return Object.assign({}, state, {
        properties: action.payload
      });

    case ArticleActionTypes.FailArticles:
      return Object.assign({}, state, initialState);


    default:
      return state;
  }
}
