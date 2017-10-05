import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';

const ENDPOINT_ANDRUXNET = 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=';
const CONTENT_TYPE = 'application/x-www-form-urlencoded';
const HDR_API_KEY = 'X-Mashape-Key';
const HDR_API_VALUE = 'OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V';

@Injectable()
export class QuoteService {
  constructor(private _http: Http) { }

  getRadomQuote() {
    const url = ENDPOINT_ANDRUXNET;
    const headers = new Headers();
    headers.append('Content-Type', CONTENT_TYPE);
    headers.append(HDR_API_KEY, HDR_API_VALUE);
    const opts = new RequestOptions();
    opts.headers = headers;
    return this._http.get(url, opts);
  }
}
