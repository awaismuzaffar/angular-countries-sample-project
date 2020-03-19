import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountriesComponent } from './containers/countries/countries.component';
import { PlacesDropdownComponent } from './components/places-dropdown/places-dropdown.component'
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { countriesReducer } from '../app/reducers/countries.reducers';
import { EffectsModule } from '@ngrx/effects';
import { CountriesEffects } from './effects/countries.effects';

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    PlacesDropdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot({ countries: countriesReducer }),
    EffectsModule.forRoot([CountriesEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }