"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var weather_service_1 = require("../../../tool/geo/weather.service");
var OwmComponent = (function () {
    function OwmComponent(owm_svc) {
        this.owm_svc = owm_svc;
        this.cityName = 'Cupertino';
    }
    OwmComponent.prototype.ngOnInit = function () {
        this.searchWeather(); // preload
        this.cityName = '';
    };
    OwmComponent.prototype.searchWeather = function () {
        var _this = this;
        this.owm_svc.getWeatherForCity(this.cityName) // hookup to Observable to get stream
            .subscribe(function (res) {
            _this.cityWeather = res.json();
            console.log(_this.cityWeather);
        });
    };
    OwmComponent.prototype.autoCompleteWeather = function (loc_obj) {
        var _this = this;
        console.log(loc_obj);
        this.cityName = loc_obj.formatted_address;
        this.owm_svc.getWeatherForCity(this.cityName) // hookup to Observable to get stream
            .subscribe(function (res) {
            _this.cityWeather = res.json();
            console.log(_this.cityWeather);
        });
    };
    return OwmComponent;
}());
OwmComponent = __decorate([
    core_1.Component({
        selector: 'app-owm',
        templateUrl: './owm.component.html',
        styleUrls: ['./owm.component.css'],
        providers: [weather_service_1.WeatherService]
    })
], OwmComponent);
exports.OwmComponent = OwmComponent;
