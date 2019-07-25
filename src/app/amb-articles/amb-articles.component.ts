import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ArticleStoreInterface } from './store/article.selectors';
import { LoadArticlesAction } from './store/article.actions';

@Component({
  selector: 'amb-articles',
  templateUrl: './amb-articles.component.html',
  styleUrls: ['./amb-articles.component.scss']
})
export class AmbArticlesComponent implements OnInit {

  constructor(
    private articleStore: Store<ArticleStoreInterface>,
  ) { }

  ngOnInit() {

    this.articleStore.dispatch(new LoadArticlesAction());

  }

}
