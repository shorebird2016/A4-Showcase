import { Injectable } from '@angular/core';
import {Jsonp, Headers, RequestOptions, Http} from '@angular/http';

const ENDPOINT_SENTIMENT = 'http://access.alchemyapi.com/calls/text/TextGetTextSentiment';
const API_KEY = '7ad26a9061e966c98dba50a926fcb00bea4b6388';

@Injectable()
export class AlchemyService {
  constructor(private _jsonp: Jsonp, private _http: Http) { }
  getOpinion(comment) {
    const headers = new Headers();
    headers.append('qpikey', API_KEY);
    headers.append('text', comment);
    headers.append('outputMode', 'json');
    headers.append('showSourceText', '1');
    headers.append('type', 'application/xml');
    // headers.append('jsonp', 'JSON_CALLBACK');
    const opts = new RequestOptions();
    opts.headers = headers;
    // return this._http.get(ENDPOINT_SENTIMENT, opts); // this is only when CORS disabled
    return this._jsonp.request(ENDPOINT_SENTIMENT, opts);
  }
}
