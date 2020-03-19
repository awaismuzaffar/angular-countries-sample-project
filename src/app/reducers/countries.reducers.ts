import { createReducer, on } from '@ngrx/store';
import { getCountriesSuccess } from '../actions/countries.actions';

export const initialState = {
    asia: [],
    europe: [],
};

const _countriesReducer = createReducer(initialState,
  on(getCountriesSuccess, (state, payload) => {
    return {
      ...state,
      [payload.payload.type]: payload.payload.countries
    }
  }),
);

export function countriesReducer(state, action) {
  return _countriesReducer(state, action);
}