// city detail autocomplete service - service area and IP Address
import { Injectable } from '@angular/core';
import { Jsonp } from '@angular/http';

// const ENDPOINT_NEARBY_CITY = 'http://getnearbycities.geobytes.com/GetNearbyCities?'
//   + 'callback=?&radius=100&locationcode=';
// const ENDPOINT_AUTOCOMPLETE_CITY = 'http://gd.geobytes.com/AutoCompleteCity?q=';
const ENDPOINT_AUTOCOMPLETE_CITY = 'http://gd.geobytes.com/AutoCompleteCity?callback=JSONP_CALLBACK&filter=US&q=';


@Injectable()
export class GeobytesService {
  constructor(private _jsonp: Jsonp) { }
  getNearbyCities(location) {
    return this._jsonp.request(ENDPOINT_AUTOCOMPLETE_CITY);
  }
  autoCompleteCity(term) {
    return this._jsonp.request(ENDPOINT_AUTOCOMPLETE_CITY + term, { method: 'Get'});
  }

}
