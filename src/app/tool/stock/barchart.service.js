"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ENDPOINT = 'http://marketdata.websol.barchart.com/getQuote.json?';
var API_KEY = 'key=f73368105ec551298b76c69d1e4d6e5a';
var BarchartService = (function () {
    function BarchartService(_http, _jsonp) {
        this._http = _http;
        this._jsonp = _jsonp;
    }
    BarchartService.prototype.getQuote = function (symbols) {
        var url = ENDPOINT + API_KEY + '&symbols=' + symbols;
        return this._http.get(url);
    };
    BarchartService.prototype.getQuoteJSONP = function (symbols) {
        var url = ENDPOINT + API_KEY + '&symbols=' + symbols;
        console.log(url);
        return this._jsonp.request(url);
    };
    return BarchartService;
}());
BarchartService = __decorate([
    core_1.Injectable()
], BarchartService);
exports.BarchartService = BarchartService;
