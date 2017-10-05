"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ENDPOINT_PREFIX = 'http://api.stackexchange.com/2.2/tags/';
var ENDPOINT_POSTFIX = '/top-answerers/all_time?site=stackoverflow';
var StackService = (function () {
    function StackService(_http) {
        this._http = _http;
    }
    StackService.prototype.getUserPosts = function (tags) {
        var url = ENDPOINT_PREFIX + tags + ENDPOINT_POSTFIX;
        return this._http.get(url);
    };
    return StackService;
}());
StackService = __decorate([
    core_1.Injectable()
], StackService);
exports.StackService = StackService;
