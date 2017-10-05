import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

const ENDPOINT_OMDB = 'http://www.omdbapi.com/'; // open move database
const SEARCH = 's=';
const FORMAT = 'r=json';
const API_KEY = 'apikey=db400b0a';

@Injectable()
export class MovieService {
  constructor(private _http: Http) { }

  getMovie(search_term) {
    const url = ENDPOINT_OMDB + '?' + SEARCH + search_term + '&' + FORMAT + '&' + API_KEY;
    return this._http.get(url);
  }
}
