import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

const ENDPOINT = 'http://quotes.rest/qod.json';

@Injectable()
export class TheySaidSoService {
  constructor(private _http: Http) { }

  getQuoteOfDay() {
    return this._http.get(ENDPOINT);
  }
}
