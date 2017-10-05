"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// use Open Weather Map API to obtain various weather information
var core_1 = require("@angular/core");
var OWM_API_PREFIX = 'http://api.openweathermap.org/data/2.5/weather';
var OWM_API_KEY = 'f1c5b8fc51cbbb980463c3923832bc1a';
var WeatherService = (function () {
    function WeatherService(_http) {
        this._http = _http;
    }
    WeatherService.prototype.getWeatherForCity = function (city_name) {
        var url = OWM_API_PREFIX + '?q=' + city_name + '&appid=' + OWM_API_KEY;
        return this._http.get(url);
    };
    return WeatherService;
}());
WeatherService = __decorate([
    core_1.Injectable()
], WeatherService);
exports.WeatherService = WeatherService;
