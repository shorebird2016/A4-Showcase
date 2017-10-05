"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ENDPOINT_IP_TEST = 'http://ip.jsontest.com';
var ENDPOINT_HEADER_TEST = 'http://header.jsontest.com';
var ENDPOINT_DATE_TEST = 'http://date.jsontest.com';
var ENDPOINT_TIME_TEST = 'http://time.jsontest.com';
var ENDPOINT_ECHO_TEST = 'http://echo.jsontest.com';
var JsonTestService = (function () {
    function JsonTestService(_http) {
        this._http = _http;
    }
    JsonTestService.prototype.testIpService = function () { return this._http.get(ENDPOINT_IP_TEST); };
    JsonTestService.prototype.testHeaderService = function () { return this._http.get(ENDPOINT_HEADER_TEST); };
    JsonTestService.prototype.testDateService = function () { return this._http.get(ENDPOINT_DATE_TEST); };
    JsonTestService.prototype.testTimeService = function () { return this._http.get(ENDPOINT_TIME_TEST); };
    JsonTestService.prototype.testEchoService = function (param1, param2) {
        return this._http.get(ENDPOINT_ECHO_TEST + '/key/value/'
            + param1 + '/' + param2);
    };
    return JsonTestService;
}());
JsonTestService = __decorate([
    core_1.Injectable()
], JsonTestService);
exports.JsonTestService = JsonTestService;
