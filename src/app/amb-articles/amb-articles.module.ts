import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AmbArticlesRoutingModule } from './amb-articles-routing.module';
import { AmbArticlesComponent } from './amb-articles.component';
import { StoreModule } from '@ngrx/store';
import * as fromArticle from './store/article.reducer';
import { EffectsModule } from '@ngrx/effects';
import { ArticleEffects } from './store/article.effects';
import { ArticleService } from './store/article.service';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../shared/material/material.module';

@NgModule({
  imports: [
    CommonModule,
    AmbArticlesRoutingModule,
    HttpClientModule,
    MaterialModule,
    StoreModule.forFeature(fromArticle.ARTICLE_FEATURE_NAME, fromArticle.articleReducer),
    EffectsModule.forFeature([ArticleEffects])
  ],
  declarations: [AmbArticlesComponent],
  providers: [ArticleService],
  exports: [AmbArticlesComponent]
})
export class AmbArticlesModule { }
