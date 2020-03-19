import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CountriesData {
  
  constructor(private httpClient: HttpClient) { }
  
  get(region:string) {
    return this.httpClient.get(`https://restcountries.eu/rest/v2/region/${region}`);
  }
}