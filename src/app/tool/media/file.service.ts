import { Injectable } from '@angular/core';
import {Http} from '@angular/http';

@Injectable()
export class FileService {
  constructor(private _http: Http) { }
  getJsonFile(file_path) {
    return this._http.get(file_path);
  }
}
