import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { getCountries } from '../../actions/countries.actions';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  regions: any;
  selectedCountry: any;
  selectedRegion: any;
  countries$: Observable<any>;

  constructor(
    private countriesStore: Store<{ countries: any }>  
  ) {
    this.countries$ = countriesStore.pipe(select('countries'));
    this.regions = [
      {name: 'Europe', key: 'europe'},
      {name: 'Asia', key: 'asia'},
    ];
  }

  ngOnInit() {
    
  }

  regionSelect() {
    this.countriesStore.dispatch(getCountries({region: this.selectedRegion.key}));
    this.selectedCountry = null;
  }
}