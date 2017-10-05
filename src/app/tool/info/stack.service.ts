import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

const ENDPOINT_PREFIX = 'http://api.stackexchange.com/2.2/tags/';
const ENDPOINT_POSTFIX = '/top-answerers/all_time?site=stackoverflow';

@Injectable()
export class StackService {
  constructor(private _http: Http) { }

  getUserPosts(tags) {
    const url = ENDPOINT_PREFIX + tags + ENDPOINT_POSTFIX;
    return this._http.get(url);
  }

}
