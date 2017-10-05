import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

const ENDP_LOCATION = 'https://freegeoip.net/json/';

@Injectable()
export class IpService {
  constructor(private _http: Http) { }
  getIp() {
    return this._http.get(ENDP_LOCATION);
  }
}

