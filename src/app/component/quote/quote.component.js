"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var quote_service_1 = require("../../tool/quote/quote.service");
var QuoteComponent = (function () {
    function QuoteComponent(_quote_svc) {
        this._quote_svc = _quote_svc;
    }
    QuoteComponent.prototype.ngOnInit = function () { this.getRadomQuote(); };
    QuoteComponent.prototype.getRadomQuote = function () {
        var _this = this;
        this._quote_svc.getRadomQuote().subscribe(function (res) {
            var payload = res.json();
            console.log(payload);
            _this.quoteObj = payload;
        });
    };
    QuoteComponent.prototype.tweetQuote = function () { };
    return QuoteComponent;
}());
QuoteComponent = __decorate([
    core_1.Component({
        selector: 'app-quote',
        templateUrl: './quote.component.html',
        styleUrls: ['./quote.component.css'],
        providers: [quote_service_1.QuoteService]
    })
], QuoteComponent);
exports.QuoteComponent = QuoteComponent;
