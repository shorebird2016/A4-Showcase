"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// A service that provides information about any country and all countries
//  via connection to a site called restcountries.eu
var core_1 = require("@angular/core");
var ENDPOINT_REST_COUNTRY = 'https://restcountries.eu/rest/v2/';
var CountryService = (function () {
    function CountryService(_http) {
        this._http = _http;
    }
    // get country by partial name / ISO-3166 2 digit or 3 digit code  TODO may get multiple results
    CountryService.prototype.getCountryInfo = function (country_name) {
        var url = ENDPOINT_REST_COUNTRY + 'name/' + country_name;
        return this._http.get(url);
    };
    // obtain all the countries in one call
    CountryService.prototype.getCountryList = function () {
        var url = ENDPOINT_REST_COUNTRY + 'all';
        return this._http.get(url);
    };
    return CountryService;
}());
CountryService = __decorate([
    core_1.Injectable()
], CountryService);
exports.CountryService = CountryService;
