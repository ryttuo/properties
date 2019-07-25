
import * as fromArticles from './article.reducer';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export interface ArticleStoreInterface {
    preferences: fromArticles.ArticleState;
}

const ArticleState = createFeatureSelector<fromArticles.ArticleState>(fromArticles.ARTICLE_FEATURE_NAME);

export const getArticles = createSelector(ArticleState, (state: fromArticles.ArticleState) => state.articles);

