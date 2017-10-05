import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/toPromise';
import {Book} from '../app/book';

const ENDPOINT = 'http://api.github.com/search/users?q=';

@Injectable()
export class GithubPromiseService {
  users;

  constructor(private _svc: Http) { }

  // convert Observable into Promise
  getUser(search_term): Promise<any> {
    return new Promise( (resolve, reject) => {
      // HTTP by default returns Observable, need to convert
      this._svc.get(ENDPOINT + search_term).toPromise().then(
        (res: Response) => {
          this.users = res.json();
          console.log(this.users);
          resolve();
          // return this.users; // TODO ???? not used??? this is very important
        }, err => {
              const msg = '*** Oops ' + err;
              console.log(msg);
              reject(msg); }
      );
    });
  }

  private extractPaylod(res: Response) {
    const body = res.json();
    return body;
  }
  private error(err: Response | any) { console.log(err); }
  getUsersViaPromise(search_term) {
    return this._svc.get(ENDPOINT + search_term).toPromise()
      .then(this.extractPaylod)
      .catch(this.error); // NOTE important not to add () at end
  }
}
