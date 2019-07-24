import { Action } from '@ngrx/store';
import { PropertyActions, PropertyActionTypes } from './property.actions';

export interface PropertyState {
  properties: Array<any>
}

export const initialState: PropertyState = {
  properties: [],
};

export function propertyReducer(state = initialState, action: PropertyActions): PropertyState {
  switch (action.type) {

    case PropertyActionTypes.LoadPropertiesSuccessful:

      return Object.assign({}, state, {
        properties: action.payload
      });


    case PropertyActionTypes.FailProperties:

      return Object.assign({}, state, initialState);


    default:
      return state;
  }
}
