import { reducer, initialState } from './layout.reducers';
import * as fromLayoutActions from './layout.actions';

describe('Layout Reducer', () => {

    describe('an unknown action', () => {

        it('should return the previous state', () => {
            const action = {} as any;

            const result = reducer(initialState, action);

            expect(result).toBe(initialState);

        });

    });

    describe('OpenSidenav action', () => {

        it('should return showSidenav state to true', () => {

            const action = new fromLayoutActions.OpenSidenav();

            const state = reducer(initialState, action);

            expect(state.showSidenav).toBeTruthy();

        });

    });

    describe('CloseSidenav action', () => {

        it('should return showSidenav state to false', () => {

            const action = new fromLayoutActions.CloseSidenav();

            initialState.showSidenav = true;

            const state = reducer(initialState, action);

            expect(state.showSidenav).toBeFalsy();

        });

    });


    describe('SetAppTitle action', () => {

        it('should return appTitle with new name', () => {

            const name = 'test name';

            const action = new fromLayoutActions.SetAppTitle(name);

            const state = reducer(initialState, action);

            expect(state.appTitle).toEqual(name);

        });

    });






});
