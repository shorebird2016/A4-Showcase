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
var apixu_service_1 = require("../../../tool/geo/apixu.service");
var ip_service_1 = require("../../../tool/geo/ip.service");
var WeatherCardComponent = (function () {
    function WeatherCardComponent(_country_svc, _ip_svc, _weather_svc) {
        this._country_svc = _country_svc;
        this._ip_svc = _ip_svc;
        this._weather_svc = _weather_svc;
        this.tempUnit = 'F';
    }
    WeatherCardComponent.prototype.ngOnInit = function () {
        // obtain current location from IP service
        var _this = this;
        this._ip_svc.getIp().subscribe(function (res1) {
            var payload = res1.json();
            console.log(payload);
            _this.location = payload;
            _this.addr = _this.location.city + ', ' + _this.location.region_name + ' '
                + _this.location.country_name; // build up address
            _this.mapCenter = '[' + _this.location.latitude + ',' + _this.location.longitude + ']';
            if (_this.location.city === '') {
                console.log('Can not find city, this device may not have location sensor. ' +
                    'Use my home Cupertino as address');
                _this.addr = 'Cupertino, CA, United States';
                _this.location.city = 'Cupertino, CA';
            }
            _this.retriveBundle();
        });
    };
    WeatherCardComponent.prototype.ngOnDestroy = function () {
        // TODO cancel subscriptions
    };
    WeatherCardComponent.prototype.retriveBundle = function () {
        var _this = this;
        this._weather_svc.getWeatherForCity(this.location.city).subscribe(function (res2) {
            var payload2 = res2.json();
            console.log(payload2);
            _this.localWeather = payload2.current;
            // replace location structure
            var loc = payload2.location;
            _this.location.city = loc.name;
            _this.location.country_name = loc.country;
            _this.location.region_name = loc.region;
            _this.location.latitude = loc.lat;
            _this.location.longitude = loc.lon;
            _this.addr = _this.location.city + ', ' + _this.location.region_name + ' '
                + _this.location.country_name; // build up address
            // get country flag
            _this._country_svc.getCountryInfo(_this.location.country_name).subscribe(function (res3) {
                var payload3 = res3.json();
                console.log(payload3);
                _this.countryInfo = payload3[0]; // NOTE - this in here still refer to component's context
            });
        });
    };
    // toggle between celcius and fahrenheit
    WeatherCardComponent.prototype.toggleCF = function () {
        if (this.tempUnit === 'C') {
            this.tempUnit = 'F';
        }
        else {
            this.tempUnit = 'C';
        }
    };
    WeatherCardComponent.prototype.getCityWeather = function () {
        this.location.city = this.cityEntry;
        this.retriveBundle();
        this.cityEntry = '';
    };
    return WeatherCardComponent;
}());
WeatherCardComponent = __decorate([
    core_1.Component({
        selector: 'app-weather-card',
        templateUrl: './weather-card.component.html',
        styleUrls: ['./weather-card.component.css'],
        providers: [country_service_1.CountryService, apixu_service_1.ApixuService, ip_service_1.IpService]
    })
], WeatherCardComponent);
exports.WeatherCardComponent = WeatherCardComponent;
