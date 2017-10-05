"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var country_service_1 = require("../../../tool/geo/country.service");
var CountryComponent = (function () {
    function CountryComponent(country_svc) {
        this.country_svc = country_svc;
        this.countryList = [];
    }
    // upon startup, load all the countries, keep disabled it since it takes a lot of memory
    CountryComponent.prototype.ngOnInit = function () {
        this.countryName = 'USA';
        this.findCountry();
    };
    CountryComponent.prototype.findCountry = function () {
        var _this = this;
        this.country_svc.getCountryInfo(this.countryName).subscribe(function (res) {
            var payload = res.json();
            console.log(payload);
            _this.countryInfo = payload[0]; // comes back in 1 element array
        });
        this.countryName = '';
    };
    return CountryComponent;
}());
CountryComponent = __decorate([
    core_1.Component({
        selector: 'app-country',
        templateUrl: './country.component.html',
        styleUrls: ['./country.component.css'],
        providers: [country_service_1.CountryService]
    })
], CountryComponent);
exports.CountryComponent = CountryComponent;
