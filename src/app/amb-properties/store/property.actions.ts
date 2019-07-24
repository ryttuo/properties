import { Action } from '@ngrx/store';

export enum PropertyActionTypes {
  LoadProperties = '[Property] Load Properties',
  LoadPropertiesSuccessful = '[Property] Load Properties Successful',
  FailProperties = '[Property] Fail Properties'
}

export class LoadPropertiesAction implements Action {
  readonly type = PropertyActionTypes.LoadProperties;
}

export class LoadPropertiesSuccessfulAction implements Action {
  readonly type = PropertyActionTypes.LoadPropertiesSuccessful;
  constructor(public payload: boolean) {
  }
}

export class FailPropertiesAction implements Action {
  readonly type = PropertyActionTypes.FailProperties;
  constructor(public payload: boolean) {
  }
}

export type PropertyActions =
  LoadPropertiesAction |
  LoadPropertiesSuccessfulAction |
  FailPropertiesAction;
