import { AmbArticlesModule } from './amb-articles.module';

describe('AmbArticlesModule', () => {
  let ambArticlesModule: AmbArticlesModule;

  beforeEach(() => {
    ambArticlesModule = new AmbArticlesModule();
  });

  it('should create an instance', () => {
    expect(ambArticlesModule).toBeTruthy();
  });
});
