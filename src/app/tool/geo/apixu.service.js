"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ENDP_WEATHER = 'https://api.apixu.com/v1/current.json?key=';
var KEY_WEATHER = '9e450fc4750d4ab0b35215759171103';
var ApixuService = (function () {
    function ApixuService(_http) {
        this._http = _http;
    }
    ApixuService.prototype.getWeatherForCity = function (city_name) {
        var url = ENDP_WEATHER + KEY_WEATHER + '&q=' + city_name;
        return this._http.get(url);
    };
    return ApixuService;
}());
ApixuService = __decorate([
    core_1.Injectable()
], ApixuService);
exports.ApixuService = ApixuService;
