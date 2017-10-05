"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ENDPOINT_QUANDL = 'https://www.quandl.com/api/v3/datasets/WIKI/';
var ENDPOINT_TAIL = '/data.json'; // use JSON format
var API_KEY_PREFIX = '?api_key=';
var QUANDL_API_KEY = API_KEY_PREFIX + 'TYN1Az8e6dj35s4zP83g';
var LIMIT = '&limit=10';
var QuandlService = (function () {
    function QuandlService(_http) {
        this._http = _http;
    }
    QuandlService.prototype.getQuotes = function (ticker) {
        var url = ENDPOINT_QUANDL + ticker + ENDPOINT_TAIL + QUANDL_API_KEY + LIMIT;
        return this._http.get(url);
    };
    return QuandlService;
}());
QuandlService = __decorate([
    core_1.Injectable()
], QuandlService);
exports.QuandlService = QuandlService;
