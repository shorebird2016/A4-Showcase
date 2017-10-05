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
var ENDPOINT_SENTIMENT = 'http://access.alchemyapi.com/calls/text/TextGetTextSentiment';
var API_KEY = '7ad26a9061e966c98dba50a926fcb00bea4b6388';
var AlchemyService = (function () {
    function AlchemyService(_jsonp, _http) {
        this._jsonp = _jsonp;
        this._http = _http;
    }
    AlchemyService.prototype.getOpinion = function (comment) {
        var headers = new http_1.Headers();
        headers.append('qpikey', API_KEY);
        headers.append('text', comment);
        headers.append('outputMode', 'json');
        headers.append('showSourceText', '1');
        headers.append('type', 'application/xml');
        // headers.append('jsonp', 'JSON_CALLBACK');
        var opts = new http_1.RequestOptions();
        opts.headers = headers;
        // return this._http.get(ENDPOINT_SENTIMENT, opts); // this is only when CORS disabled
        return this._jsonp.request(ENDPOINT_SENTIMENT, opts);
    };
    return AlchemyService;
}());
AlchemyService = __decorate([
    core_1.Injectable()
], AlchemyService);
exports.AlchemyService = AlchemyService;
