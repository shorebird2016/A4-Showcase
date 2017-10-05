"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// city detail autocomplete service - service area and IP Address
var core_1 = require("@angular/core");
// const ENDPOINT_NEARBY_CITY = 'http://getnearbycities.geobytes.com/GetNearbyCities?'
//   + 'callback=?&radius=100&locationcode=';
// const ENDPOINT_AUTOCOMPLETE_CITY = 'http://gd.geobytes.com/AutoCompleteCity?q=';
var ENDPOINT_AUTOCOMPLETE_CITY = 'http://gd.geobytes.com/AutoCompleteCity?callback=JSONP_CALLBACK&filter=US&q=';
var GeobytesService = (function () {
    function GeobytesService(_jsonp) {
        this._jsonp = _jsonp;
    }
    GeobytesService.prototype.getNearbyCities = function (location) {
        return this._jsonp.request(ENDPOINT_AUTOCOMPLETE_CITY);
    };
    GeobytesService.prototype.autoCompleteCity = function (term) {
        return this._jsonp.request(ENDPOINT_AUTOCOMPLETE_CITY + term, { method: 'Get' });
    };
    return GeobytesService;
}());
GeobytesService = __decorate([
    core_1.Injectable()
], GeobytesService);
exports.GeobytesService = GeobytesService;
