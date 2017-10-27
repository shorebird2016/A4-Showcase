import { Injectable } from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';

const ENDPOINT = 'https://jsonplaceholder.typicode.com';

@Injectable()
export class JsonPlaceholderService {
  constructor(private _http: Http) { }

  getCollection(collection_id): Observable<any> {
    return this._http.get(ENDPOINT + '/' + collection_id).map(res => res.json());
  }
}
