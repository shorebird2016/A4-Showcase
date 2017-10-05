import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

const ENDPOINT_COMPANIES = 'https://api.usfundamentals.com/v1/companies/xbrl';
const QP_COMPANIES = 'companies=';
const QP_FORMAT_JSON = '&format=json';
const QP_API_TOKEN = '&token=';
const API_TOKEN = 'PARblkQlABtzGoLQPEXLLg';

const INDICATORS = 'Assects,OperatingIncomeLoss,NetIncomeLoss,Revenues';

const ENDPOINT_INDICATORS = 'https://api.usfundamentals.com/v1/indicators/xbrl';
const QP_INDICATORS = '?indicators=';
const QP_META = '/meta';

@Injectable()
export class FundamentalService {
  constructor(private _http: Http) { }

  getCompanies() {
    const url = ENDPOINT_COMPANIES + '?' + QP_COMPANIES + QP_FORMAT_JSON + QP_API_TOKEN + API_TOKEN;
    return this._http.get(url);
  }
  getFundamentals(company_id) {
    const url = ENDPOINT_INDICATORS + QP_INDICATORS + INDICATORS + '&' + QP_COMPANIES
      + company_id + QP_API_TOKEN + API_TOKEN;
    return this._http.get(url);
  }
  getIndicatorMetadata() {
    const url = ENDPOINT_INDICATORS + QP_META + '?frequency=y' + QP_API_TOKEN + API_TOKEN;
    return this._http.get(url);
  }
}

/* sample JSON
[{"company_id":"320193","name_latest":"Apple Inc","names_previous":null},
{"company_id":"1418091","name_latest":"Twitter, Inc.","names_previous":null}]
 */

// TODO this only works if chrome CORS checking is disabled, need to develop one with JSONP
