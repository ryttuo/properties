import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ArticleEffects } from './article.effects';
import { HttpClientModule } from '@angular/common/http';

describe('ArticleEffects', () => {
  let actions$: Observable<any>;
  let effects: ArticleEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      providers: [
        ArticleEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(ArticleEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
