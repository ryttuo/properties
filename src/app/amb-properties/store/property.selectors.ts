
import * as fromProperties from './property.reducer';
import { createSelector, createFeatureSelector } from '@ngrx/store';

export interface PropertyStoreInterface {
    preferences: fromProperties.PropertyState;
}

const PropertyState = createFeatureSelector<fromProperties.PropertyState>(fromProperties.PROPERTY_FEATURE_NAME);

export const getProperties = createSelector(PropertyState, (state: fromProperties.PropertyState) => state.properties);

