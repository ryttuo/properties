import { articleReducer, initialState } from './article.reducer';

describe('Article Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = articleReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
