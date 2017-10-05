import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

const ENDPOINT = 'https://www.alphavantage.co/query?';
const FUNCTION_EOD = 'function=TIME_SERIES_DAILY&symbol=';
const FUNCTION_EOD_ADJUSTED = 'function=TIME_SERIES_DAILY_ADJUSTED&symbol=';
const FUNCTION_EOW = 'function=TIME_SERIES_WEEKLY&symbol=';
const OUTPUT_SIZE = '&outputsize=10';
const API_KEY_PREFIX = '&apikey=';
const API_KEY = '1T2UBEXGH68UKJVG';

@Injectable()
export class AlphaVantageService {
  constructor(private _http: Http) { }

  // default latest 100 sessions
  getEndOfDayQuotes(symbol) {
    const url = ENDPOINT + FUNCTION_EOD + symbol + API_KEY_PREFIX + API_KEY;
    console.log(url);
    return this._http.get(url);
  }

  // get weekly quotes
  getEndOfWeekQuotes(symbol) {
    const url = ENDPOINT + FUNCTION_EOW + symbol + API_KEY_PREFIX + API_KEY;
    return this._http.get(url);
  }
}
