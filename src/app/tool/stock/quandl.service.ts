import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

const ENDPOINT_QUANDL = 'https://www.quandl.com/api/v3/datasets/WIKI/';
const ENDPOINT_TAIL = '/data.json'; // use JSON format
const API_KEY_PREFIX = '?api_key=';
const QUANDL_API_KEY = API_KEY_PREFIX + 'TYN1Az8e6dj35s4zP83g';
const LIMIT = '&limit=10';

@Injectable()
export class QuandlService {
  constructor(private _http: Http) { }

  getQuotes(ticker) {
    const url = ENDPOINT_QUANDL + ticker + ENDPOINT_TAIL + QUANDL_API_KEY + LIMIT;
    return this._http.get(url);
  }
}
