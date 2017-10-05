"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var alpha_vantage_service_1 = require("../../../tool/stock/alpha-vantage.service");
var AlphaVantageComponent = (function () {
    function AlphaVantageComponent(_av_svc) {
        this._av_svc = _av_svc;
        this.ticker = 'AAPL';
        this.frequency = 'EOD';
        this.quotes = [];
    }
    AlphaVantageComponent.prototype.ngOnInit = function () {
    };
    AlphaVantageComponent.prototype.getQuotes = function () {
        var _this = this;
        // depending upon frequency, use daily or weekly
        if (this.frequency === 'EOD') {
            this._av_svc.getEndOfDayQuotes(this.ticker).subscribe(function (res) {
                var payload = res.json();
                console.log(payload);
                var results = payload['Time Series (Daily)'];
                // convert strange looking JSON into internal structure
                var keys = Object.keys(results);
                for (var idx = 0; idx < keys.length; idx++) {
                    var date = keys[idx];
                    var obj = results[date];
                    var quote_obj = {
                        date: date,
                        open: obj['1. open'],
                        high: obj['2. high'],
                        low: obj['3. low'],
                        close: obj['4. close'],
                        volume: obj['5. volume']
                    };
                    _this.quotes.push(quote_obj);
                }
                console.log(_this.quotes);
            });
        }
        else {
            this._av_svc.getEndOfWeekQuotes(this.ticker).subscribe(function (res) {
                var payload = res.json();
                console.log(payload);
                var results = payload['Weekly Time Series'];
                // convert strange looking JSON into internal format
                _this.quotes = [];
                var keys = Object.keys(results);
                for (var idx = 0; idx < keys.length; idx++) {
                    var date = keys[idx];
                    var obj = results[date];
                    var quote_obj = {
                        date: date,
                        open: obj['1. open'],
                        high: obj['2. high'],
                        low: obj['3. low'],
                        close: obj['4. close'],
                        volume: obj['5. volume']
                    };
                    _this.quotes.push(quote_obj);
                }
                console.log(_this.quotes);
            });
        }
    };
    return AlphaVantageComponent;
}());
AlphaVantageComponent = __decorate([
    core_1.Component({
        selector: 'app-alpha-vantage',
        templateUrl: './alpha-vantage.component.html',
        styleUrls: ['./alpha-vantage.component.css'],
        providers: [alpha_vantage_service_1.AlphaVantageService]
    })
], AlphaVantageComponent);
exports.AlphaVantageComponent = AlphaVantageComponent;
// strange kind of data quotes
// "Time Series (Daily)": {
//   "2017-09-08": {
//     "1. open": "74.3300",
//       "2. high": "74.4400",
//       "3. low": "73.8400",
//       "4. close": "73.9800",
//       "5. volume": "14474383"
//   },
//   "2017-09-07": {
//     "1. open": "73.6800",
//       "2. high": "74.6000",
//       "3. low": "73.6000",
//       "4. close": "74.3400",
//       "5. volume": "17165518"
//   },
