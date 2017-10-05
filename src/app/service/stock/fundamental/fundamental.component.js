"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var fundamental_service_1 = require("../../../tool/stock/fundamental.service");
var FundamentalComponent = (function () {
    function FundamentalComponent(_svc) {
        this._svc = _svc;
    }
    FundamentalComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._svc.getCompanies().subscribe(function (res) {
            var payload = res.json();
            console.log(payload);
            _this.companies = payload;
        });
    };
    FundamentalComponent.prototype.getFundamentalByCompanyId = function () {
        var _this = this;
        this._svc.getFundamentals(this.companyId).subscribe(function (res) {
            var payload = res.text(); // data all in _body
            console.log(payload);
            _this.companyData = payload;
        });
    };
    FundamentalComponent.prototype.getIndicatorsMeta = function () {
        var _this = this;
        this._svc.getIndicatorMetadata().subscribe(function (res) {
            var payload = res;
            console.log(payload);
            _this.indicators = payload.text(); // NOTE - must use text() to get to body part when not JSON payload
        });
    };
    return FundamentalComponent;
}());
FundamentalComponent = __decorate([
    core_1.Component({
        selector: 'app-fundamental',
        templateUrl: './fundamental.component.html',
        styleUrls: ['./fundamental.component.css'],
        providers: [fundamental_service_1.FundamentalService]
    })
], FundamentalComponent);
exports.FundamentalComponent = FundamentalComponent;
