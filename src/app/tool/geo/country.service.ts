// A service that provides information about any country and all countries
//  via connection to a site called restcountries.eu
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

const ENDPOINT_REST_COUNTRY = 'https://restcountries.eu/rest/v2/';

@Injectable()
export class CountryService {
  constructor(private _http: Http) { }

  // get country by partial name / ISO-3166 2 digit or 3 digit code  TODO may get multiple results
  getCountryInfo(country_name) {
    const url = ENDPOINT_REST_COUNTRY + 'name/' + country_name;
    return this._http.get(url);
  }

  // obtain all the countries in one call
  getCountryList() {
    const url = ENDPOINT_REST_COUNTRY + 'all';
    return this._http.get(url);
  }

  // search by ISO 4217 currency code
}
