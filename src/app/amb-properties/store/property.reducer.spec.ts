import { propertyReducer, initialState } from './property.reducer';

describe('Property Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;

      const result = propertyReducer(initialState, action);

      expect(result).toBe(initialState);
    });
  });
});
