import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

const ENDPOINT = 'http://api.github.com/search/users?q=';

@Injectable()
export class GithubService {
  constructor(private _svc: Http) { }
  getUsers(search_term) {
    return this._svc.get(ENDPOINT + search_term).map((res: Response) => {
      console.log(res.json());
      return res.json();
    });
  }
}
