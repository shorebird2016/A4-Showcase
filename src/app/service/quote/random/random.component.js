"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forismatic_service_1 = require("../../../tool/quote/forismatic.service");
var RandomComponent = (function () {
    function RandomComponent(_svc) {
        this._svc = _svc;
    }
    RandomComponent.prototype.ngOnInit = function () { this.getQuote(); };
    RandomComponent.prototype.getQuote = function () {
        var _this = this;
        this._svc.getRandomQuote().subscribe(function (res) {
            var payload = res.json();
            console.log(payload);
            _this.quoteText = payload.quoteText;
            if (payload.quoteAuthor) {
                _this.author = payload.quoteAuthor;
            }
            else {
                _this.author = 'Author unknown';
            }
        });
    };
    return RandomComponent;
}());
RandomComponent = __decorate([
    core_1.Component({
        selector: 'app-random',
        templateUrl: './random.component.html',
        styleUrls: ['./random.component.css'],
        providers: [forismatic_service_1.ForismaticService]
    })
], RandomComponent);
exports.RandomComponent = RandomComponent;
