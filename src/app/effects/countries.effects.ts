import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError, withLatestFrom } from 'rxjs/operators';
import { CountriesData } from '../containers/countries/countries.data.service';
import { Store } from '@ngrx/store';

@Injectable()
export class CountriesEffects {
  getCountries$ = createEffect(() => this.actions$.pipe(
    ofType('[Countries Component] Get Countries'),
    withLatestFrom(
      this.store
    ),
    mergeMap(([action, storeState]:any) => { 
      if (storeState.countries[action.region].length === 0) {
        return this.countriesData.get(action.region)
          .pipe(
            map(countries => ({ 
              type: '[Countries Component] Get Countries Success', 
              payload: {countries: countries, type: action.region}
            })),
            catchError(() => EMPTY)
          )
      }
      return EMPTY;
      })
    )
  );

  constructor(
    private actions$: Actions,
    private countriesData: CountriesData,
    private store: Store<{ countries: any }>
  ) {}
}