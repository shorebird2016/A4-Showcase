import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';

const ENDPOINT_API = 'https://en.wikipedia.org/api/rest_v1';

const ENDPOINT_SEARCH = 'https://en.wikipedia.org/w/api.php';
const PARAM_SEARCH = '?action=opensearch&search=';
const PARAM_TAIL = '&format=json&callback=JSONP_CALLBACK&'; // MSUT have JSONP_CALLBACK&, original ? dosen't work

@Injectable()
export class WikiService {
  constructor(private _jsonp: Jsonp) { }
  searchByKeyword(keyword) {
    // const url = ENDPOINT_SEARCH + '?format=jsonp&action=query&generator=search&gsrnamespace=0' +
    //   '&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1' +
    //   '&exlimit=max&gsrsearch=' + keyword;

    const url = ENDPOINT_SEARCH + PARAM_SEARCH + keyword + PARAM_TAIL;
    console.log(url);
    return this._jsonp.request(url,{ method: 'Get'});
  }
}
