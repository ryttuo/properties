import { TestBed, inject } from '@angular/core/testing';

import { ArticleService } from './article.service';
import { HttpClientModule } from '@angular/common/http';

describe('ArticleService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule ],
      providers: [ArticleService]
    });
  });

  it('should be created', inject([ArticleService], (service: ArticleService) => {
    expect(service).toBeTruthy();
  }));
});
