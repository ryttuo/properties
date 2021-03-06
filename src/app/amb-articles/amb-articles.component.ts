import { Component, OnInit, Input } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ArticleStoreInterface, getArticles } from './store/article.selectors';
import { LoadArticlesAction } from './store/article.actions';
import { Observable } from 'rxjs';
import { AppState, getAppTitle } from '../core/appState';
import { SetAppTitle } from '../core/layout/layout.actions';

@Component({
  selector: 'amb-articles',
  templateUrl: './amb-articles.component.html',
  styleUrls: ['./amb-articles.component.scss']
})
export class AmbArticlesComponent implements OnInit {

  articlesData$: Observable<Array<any>>;
  @Input() listContent = true;

  constructor(
    private layoutStore: Store<AppState>,
    private articleStore: Store<ArticleStoreInterface>,
  ) { }

  ngOnInit() {

    if (this.listContent) {
      this.layoutStore.dispatch(new SetAppTitle('articles'));
    }

    this.articleStore.dispatch(new LoadArticlesAction());

    this.articlesData$ = this.articleStore.pipe(select(getArticles));

  }

}
