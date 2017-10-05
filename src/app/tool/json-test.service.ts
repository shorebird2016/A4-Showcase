import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

const ENDPOINT_IP_TEST = 'http://ip.jsontest.com';
const ENDPOINT_HEADER_TEST = 'http://header.jsontest.com';
const ENDPOINT_DATE_TEST = 'http://date.jsontest.com';
const ENDPOINT_TIME_TEST = 'http://time.jsontest.com';
const ENDPOINT_ECHO_TEST = 'http://echo.jsontest.com';

@Injectable()
export class JsonTestService {
  constructor(private _http: Http) { }
  testIpService() {return this._http.get(ENDPOINT_IP_TEST); }
  testHeaderService() {return this._http.get(ENDPOINT_HEADER_TEST); }
  testDateService() {return this._http.get(ENDPOINT_DATE_TEST); }
  testTimeService() {return this._http.get(ENDPOINT_TIME_TEST); }
  testEchoService(param1, param2) {return this._http.get(ENDPOINT_ECHO_TEST + '/key/value/'
    + param1 + '/' + param2); }
}
