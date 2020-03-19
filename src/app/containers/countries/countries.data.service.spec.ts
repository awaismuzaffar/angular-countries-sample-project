import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { CountriesData } from './countries.data.service';

describe('CountriesData', () => {
  
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        CountriesData,
      ],
    });    
  });

  describe('get', () => {

    let service: CountriesData;

    beforeEach(() => {
      service = TestBed.get(CountriesData);
      httpTestingController = TestBed.get(HttpTestingController);
    });

    it('should do a GET request to get the region data', () => {
      
      service.get('asia').subscribe();

      const req = httpTestingController.expectOne('https://restcountries.eu/rest/v2/region/asia');
  
      expect(req.request.method).toEqual('GET');
      
      httpTestingController.verify();
    });
  });
});