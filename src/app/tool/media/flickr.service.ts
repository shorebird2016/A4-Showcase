import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

// const ENDPOINT_FLICKR = 'https://api.flickr.com/services/rest/?method=flickr.people.getPublicPhotos';
const ENDPOINT_FLICKR = 'https://api.flickr.com/services/rest/';
const METHOD_PUBLIC_PHOTOS = '?method=flickr.people.getPublicPhotos';
const METHOD_SEARCH = '?method=flickr.photos.search';
const API_KEY = 'a5e95177da353f58113fd60296e1d250';
const USER_ID = '24662369@N07';
const FORMAT = '&format=json&nojsoncallback=1';
const PAGE = '&page=';
const TAGS = '&tags=';
const OPTIONS = FORMAT + PAGE;

@Injectable()
export class FlickrService {
  constructor(private _http: Http) { }
  getDefaultPhotos() {
    const url = ENDPOINT_FLICKR + METHOD_PUBLIC_PHOTOS + '&api_key=' + API_KEY + '&user_id=' + USER_ID + OPTIONS + 1;
    return this._http.get(url);
  }

  getMorePhotos(page_number) {
    const url = ENDPOINT_FLICKR + '&api_key=' + API_KEY + '&user_id=' + USER_ID + OPTIONS + page_number;
    return this._http.get(url);
  }

  searchPhotos(search_term) {
    const url = ENDPOINT_FLICKR + METHOD_SEARCH + '&api_key=' + API_KEY + '&user_id='
      + USER_ID + FORMAT + TAGS + search_term;
    return this._http.get(url);
  }
}
