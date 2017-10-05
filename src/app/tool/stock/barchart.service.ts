import { Injectable } from '@angular/core';
import {Http, Jsonp} from '@angular/http';

const ENDPOINT = 'http://marketdata.websol.barchart.com/getQuote.json?';
const API_KEY = 'key=f73368105ec551298b76c69d1e4d6e5a';

@Injectable()
export class BarchartService {
  constructor(private _http: Http, private _jsonp: Jsonp) { }
  getQuote(symbols) {
    const url = ENDPOINT + API_KEY + '&symbols=' + symbols;
    return this._http.get(url);
  }

  getQuoteJSONP(symbols) {
    const url = ENDPOINT + API_KEY + '&symbols=' + symbols;
    console.log(url);
    return this._jsonp.request(url);
  }
}
