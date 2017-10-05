import { Injectable } from '@angular/core';
import {Http, Jsonp, ResponseOptions, Headers} from '@angular/http';

const ENDPOINT = 'http://api.forismatic.com/api/1.0/?';
const PARAM = 'method=getQuote&format=jsonp&lang=en&jsonp=JSONP_CALLBACK&?';

@Injectable()
export class ForismaticService {
  constructor(private _http: Http, private _jsonp: Jsonp) { }

  getRandomQuote() {
    const url = ENDPOINT + PARAM;
    const headers = new Headers();
    headers.append('dataType', 'jsonp');
    headers.append('data', PARAM);
    const option = new ResponseOptions();
    option.headers = headers;
    return this._jsonp.request(url, option);
  }
}
