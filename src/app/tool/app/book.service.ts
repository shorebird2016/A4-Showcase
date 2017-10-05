import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Book} from './book';
import 'rxjs/add/operator/toPromise';

const ENDPOINT = 'assets/reference/books.json';

@Injectable()
export class BookService {
  constructor(private _http: Http) { }

  getBooksWithPromise(): Promise<Book[]> {
    return this._http.get(ENDPOINT).toPromise()
      .then(this.extractData)
      .catch(this.handleErrorPromise);
  }
  private extractData(res: Response) {
    const body = res.json();
    return body;
  }
  private handleErrorPromise(error: Response | any) {
    console.error(error.message || error);
    return Promise.reject(error.message || error);
  }
}
