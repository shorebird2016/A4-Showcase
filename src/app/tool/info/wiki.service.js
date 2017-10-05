"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ENDPOINT_API = 'https://en.wikipedia.org/api/rest_v1';
var ENDPOINT_SEARCH = 'https://en.wikipedia.org/w/api.php';
var PARAM_SEARCH = '?action=opensearch&search=';
var PARAM_TAIL = '&format=json&callback=JSONP_CALLBACK&'; // MSUT have JSONP_CALLBACK&, original ? dosen't work
var WikiService = (function () {
    function WikiService(_jsonp) {
        this._jsonp = _jsonp;
    }
    WikiService.prototype.searchByKeyword = function (keyword) {
        // const url = ENDPOINT_SEARCH + '?format=jsonp&action=query&generator=search&gsrnamespace=0' +
        //   '&gsrlimit=10&prop=pageimages|extracts&pilimit=max&exintro&explaintext&exsentences=1' +
        //   '&exlimit=max&gsrsearch=' + keyword;
        var url = ENDPOINT_SEARCH + PARAM_SEARCH + keyword + PARAM_TAIL;
        console.log(url);
        return this._jsonp.request(url, { method: 'Get' });
    };
    return WikiService;
}());
WikiService = __decorate([
    core_1.Injectable()
], WikiService);
exports.WikiService = WikiService;
