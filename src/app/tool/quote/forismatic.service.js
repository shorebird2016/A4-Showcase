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
var ENDPOINT = 'http://api.forismatic.com/api/1.0/?';
var PARAM = 'method=getQuote&format=jsonp&lang=en&jsonp=JSONP_CALLBACK&?';
var ForismaticService = (function () {
    function ForismaticService(_http, _jsonp) {
        this._http = _http;
        this._jsonp = _jsonp;
    }
    ForismaticService.prototype.getRandomQuote = function () {
        var url = ENDPOINT + PARAM;
        var headers = new http_1.Headers();
        headers.append('dataType', 'jsonp');
        headers.append('data', PARAM);
        var option = new http_1.ResponseOptions();
        option.headers = headers;
        return this._jsonp.request(url, option);
    };
    return ForismaticService;
}());
ForismaticService = __decorate([
    core_1.Injectable()
], ForismaticService);
exports.ForismaticService = ForismaticService;
