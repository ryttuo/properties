import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmbArticlesComponent } from './amb-articles.component';
import { MaterialModule } from '../shared/material/material.module';
import { NO_ERRORS_SCHEMA } from '@angular/compiler/src/core';
import { StoreModule } from '@ngrx/store';
import * as fromArticle from './store/article.reducer';
import { HttpClientModule } from '@angular/common/http';

describe('AmbArticlesComponent', () => {
  let component: AmbArticlesComponent;
  let fixture: ComponentFixture<AmbArticlesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        StoreModule.forRoot({}),
        StoreModule.forFeature(fromArticle.ARTICLE_FEATURE_NAME, fromArticle.articleReducer)
      ],
      declarations: [AmbArticlesComponent],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmbArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
