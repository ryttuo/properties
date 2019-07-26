import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { ArticleStoreInterface, getArticles } from './store/article.selectors';
import { LoadArticlesAction } from './store/article.actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'amb-articles',
  templateUrl: './amb-articles.component.html',
  styleUrls: ['./amb-articles.component.scss']
})
export class AmbArticlesComponent implements OnInit {

  articlesData$: Observable<Array<any>>;

  constructor(
    private articleStore: Store<ArticleStoreInterface>,
  ) { }

  ngOnInit() {

    this.articleStore.dispatch(new LoadArticlesAction());

    this.articlesData$ = this.articleStore.pipe(select(getArticles));

  }

}
