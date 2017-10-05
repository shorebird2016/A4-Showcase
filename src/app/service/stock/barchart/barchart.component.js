"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var barchart_service_1 = require("../../../tool/stock/barchart.service");
var BarchartComponent = (function () {
    function BarchartComponent(_svc) {
        this._svc = _svc;
        this.ticker = 'FB';
    }
    BarchartComponent.prototype.ngOnInit = function () { this.getQuote(); };
    BarchartComponent.prototype.getQuote = function () {
        var _this = this;
        this._svc.getQuote(this.ticker).subscribe(function (res) {
            var payload = res.json();
            console.log(payload);
            _this.quoteObjects = payload.results[0];
        });
    };
    return BarchartComponent;
}());
BarchartComponent = __decorate([
    core_1.Component({
        selector: 'app-barchart',
        templateUrl: './barchart.component.html',
        styleUrls: ['./barchart.component.css'],
        providers: [barchart_service_1.BarchartService]
    })
], BarchartComponent);
exports.BarchartComponent = BarchartComponent;
