"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var ENDPOINT_ANDRUXNET = 'https://andruxnet-random-famous-quotes.p.mashape.com/cat=';
var CONTENT_TYPE = 'application/x-www-form-urlencoded';
var HDR_API_KEY = 'X-Mashape-Key';
var HDR_API_VALUE = 'OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V';
var QuoteService = (function () {
    function QuoteService(_http) {
        this._http = _http;
    }
    QuoteService.prototype.getRadomQuote = function () {
        var url = ENDPOINT_ANDRUXNET;
        var headers = new http_1.Headers();
        headers.append('Content-Type', CONTENT_TYPE);
        headers.append(HDR_API_KEY, HDR_API_VALUE);
        var opts = new http_1.RequestOptions();
        opts.headers = headers;
        return this._http.get(url, opts);
    };
    return QuoteService;
}());
QuoteService = __decorate([
    core_1.Injectable()
], QuoteService);
exports.QuoteService = QuoteService;
