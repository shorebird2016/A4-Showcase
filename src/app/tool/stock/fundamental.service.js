"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ENDPOINT_COMPANIES = 'https://api.usfundamentals.com/v1/companies/xbrl';
var QP_COMPANIES = 'companies=';
var QP_FORMAT_JSON = '&format=json';
var QP_API_TOKEN = '&token=';
var API_TOKEN = 'PARblkQlABtzGoLQPEXLLg';
var INDICATORS = 'Assects,OperatingIncomeLoss,NetIncomeLoss,Revenues';
var ENDPOINT_INDICATORS = 'https://api.usfundamentals.com/v1/indicators/xbrl';
var QP_INDICATORS = '?indicators=';
var QP_META = '/meta';
var FundamentalService = (function () {
    function FundamentalService(_http) {
        this._http = _http;
    }
    FundamentalService.prototype.getCompanies = function () {
        var url = ENDPOINT_COMPANIES + '?' + QP_COMPANIES + QP_FORMAT_JSON + QP_API_TOKEN + API_TOKEN;
        return this._http.get(url);
    };
    FundamentalService.prototype.getFundamentals = function (company_id) {
        var url = ENDPOINT_INDICATORS + QP_INDICATORS + INDICATORS + '&' + QP_COMPANIES
            + company_id + QP_API_TOKEN + API_TOKEN;
        return this._http.get(url);
    };
    FundamentalService.prototype.getIndicatorMetadata = function () {
        var url = ENDPOINT_INDICATORS + QP_META + '?frequency=y' + QP_API_TOKEN + API_TOKEN;
        return this._http.get(url);
    };
    return FundamentalService;
}());
FundamentalService = __decorate([
    core_1.Injectable()
], FundamentalService);
exports.FundamentalService = FundamentalService;
/* sample JSON
[{"company_id":"320193","name_latest":"Apple Inc","names_previous":null},
{"company_id":"1418091","name_latest":"Twitter, Inc.","names_previous":null}]
 */
// TODO this only works if chrome CORS checking is disabled, need to develop one with JSONP
