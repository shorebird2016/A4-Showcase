"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ENDPOINT = 'https://www.alphavantage.co/query?';
var FUNCTION_EOD = 'function=TIME_SERIES_DAILY&symbol=';
var FUNCTION_EOD_ADJUSTED = 'function=TIME_SERIES_DAILY_ADJUSTED&symbol=';
var FUNCTION_EOW = 'function=TIME_SERIES_WEEKLY&symbol=';
var OUTPUT_SIZE = '&outputsize=10';
var API_KEY_PREFIX = '&apikey=';
var API_KEY = '1T2UBEXGH68UKJVG';
var AlphaVantageService = (function () {
    function AlphaVantageService(_http) {
        this._http = _http;
    }
    // default latest 100 sessions
    AlphaVantageService.prototype.getEndOfDayQuotes = function (symbol) {
        var url = ENDPOINT + FUNCTION_EOD + symbol + API_KEY_PREFIX + API_KEY;
        console.log(url);
        return this._http.get(url);
    };
    // get weekly quotes
    AlphaVantageService.prototype.getEndOfWeekQuotes = function (symbol) {
        var url = ENDPOINT + FUNCTION_EOW + symbol + API_KEY_PREFIX + API_KEY;
        return this._http.get(url);
    };
    return AlphaVantageService;
}());
AlphaVantageService = __decorate([
    core_1.Injectable()
], AlphaVantageService);
exports.AlphaVantageService = AlphaVantageService;
