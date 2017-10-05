"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ENDPOINT_QUOTE = 'http://dev.markitondemand.com/MODApis/Api/v2/Quote/json?';
var MarkitService = (function () {
    function MarkitService(_http) {
        this._http = _http;
    }
    MarkitService.prototype.getQuote = function (ticker) {
        var url = ENDPOINT_QUOTE + 'symbol=' + ticker;
        return this._http.get(url);
    };
    return MarkitService;
}());
MarkitService = __decorate([
    core_1.Injectable()
], MarkitService);
exports.MarkitService = MarkitService;
// TODO this only works if chrome CORS checking is disabled, need to develop one with JSONP
