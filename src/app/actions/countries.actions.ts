import { createAction, props } from '@ngrx/store';

export const getCountries = createAction(
    '[Countries Component] Get Countries', 
    props<{ region: string; }>()
);

export const getCountriesSuccess = createAction(
    '[Countries Component] Get Countries Success', 
    props<{ payload: any; }>()
);