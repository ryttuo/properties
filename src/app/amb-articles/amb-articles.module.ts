import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AmbArticlesRoutingModule } from './amb-articles-routing.module';
import { AmbArticlesComponent } from './amb-articles.component';
import { StoreModule } from '@ngrx/store';
import * as fromArticle from './store/article.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ArticleEffects } from './store/article.effects';

@NgModule({
  imports: [
    CommonModule,
    AmbArticlesRoutingModule,
    StoreModule.forFeature('article', fromArticle.articleReducer),
    EffectsModule.forFeature([ArticleEffects])
  ],
  declarations: [AmbArticlesComponent]
})
export class AmbArticlesModule { }
