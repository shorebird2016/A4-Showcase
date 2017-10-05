"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var markit_service_1 = require("../../../tool/stock/markit.service");
var MarkitComponent = (function () {
    function MarkitComponent(_svc) {
        this._svc = _svc;
        this.ticker = 'AMZN';
    }
    MarkitComponent.prototype.ngOnInit = function () { this.getQuote(); };
    MarkitComponent.prototype.getQuote = function () {
        var _this = this;
        this._svc.getQuote(this.ticker).subscribe(function (res) {
            var payload = res.json();
            console.log(payload);
            _this.quote = payload;
        });
    };
    return MarkitComponent;
}());
MarkitComponent = __decorate([
    core_1.Component({
        selector: 'app-markit',
        templateUrl: './markit.component.html',
        styleUrls: ['./markit.component.css'],
        providers: [markit_service_1.MarkitService]
    })
], MarkitComponent);
exports.MarkitComponent = MarkitComponent;
