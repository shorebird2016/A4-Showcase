"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var they_said_so_service_1 = require("../../../tool/quote/they-said-so.service");
var TheysayComponent = (function () {
    function TheysayComponent(_svc) {
        this._svc = _svc;
    }
    TheysayComponent.prototype.ngOnInit = function () { this.getQod(); };
    TheysayComponent.prototype.getQod = function () {
        var _this = this;
        this._svc.getQuoteOfDay().subscribe(function (res) {
            var payload = res.json();
            console.log(payload);
            _this.quoteObj = payload.contents.quotes[0];
            _this.quoteText = _this.quoteObj.quote;
            _this.author = _this.quoteObj.author;
        });
    };
    return TheysayComponent;
}());
TheysayComponent = __decorate([
    core_1.Component({
        selector: 'app-theysay',
        templateUrl: './theysay.component.html',
        styleUrls: ['./theysay.component.css'],
        providers: [they_said_so_service_1.TheySaidSoService]
    })
], TheysayComponent);
exports.TheysayComponent = TheysayComponent;
