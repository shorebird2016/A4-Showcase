import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

const ENDPOINT_QUOTE = 'http://dev.markitondemand.com/MODApis/Api/v2/Quote/json?';

@Injectable()
export class MarkitService {
  constructor(private _http: Http) { }

  getQuote(ticker) {
    const url = ENDPOINT_QUOTE + 'symbol=' + ticker;
    return this._http.get(url);
  }
}

// TODO this only works if chrome CORS checking is disabled, need to develop one with JSONP
